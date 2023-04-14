// loosely based on https://github.com/tsoding/ded/blob/master/src/lexer.c

/**
 * @template [TKind = string]
 * @typedef Token<TKind>
 * @property {string} value - value of the token. Eg., "//" for a BEGIN_LINE_COMMENT token
 * @property {TKind | "EOF" | "OTHER" | "STRING" | "KEYWORD" | "SYMBOL" | "NUMBER" | "COMMENT" | "BEGIN_LINE_COMMENT"} kind -
 * the kind of token. Eg., SYMBOL, STRING, KEYWORD
 */

/**
 * @template [TKind = string]
 * @typedef IContextManager<TKind>
 * @property {IContextManagerApplyFn<TKind>} apply - replace the most recently tokenised token with this token.
 */

 /**
  * @template [TKind = string]
  * @callback IContextManagerApplyFn
  * @param {Token<TKind>} token - most recently tokenised token
  * @returns {TKind | null} a token to use instead of the provided token
  */

/**
 * @template [TKind = string]
 */
export class Lexer {
  /**
   * @private
   * @type {number}
   */
  cursor = 0;

  /**
   * @private
   * @type {string}
   */
  get contentFromCursor() {
    return this.content.substring(this.cursor);
  }

  /**
   * @param {string} content - arbitrary string which will be tokenised
   * @param {string[]} keywords - keywords of the target language - words like "if", "else", etc.
   * @param {Token<TKind>[]} literals - literals of the target language - strings like "{", ".", etc.
   * Should not include string literals
   * @param {Token<TKind>[]} stringLiterals - string literals of the target language - eg., double quotation marks
   * @param {IContextManager<TKind>[]} contextManagers - context managers keep track of more difficult tokenisation
   * logic and are able to override tokens produced by the lexer
   */
  constructor(
    content,
    keywords,
    literals,
    stringLiterals,
    contextManagers,
  ) {
    /** @private */
    this.content = content;
    /** @private */
    this.keywords = keywords;
    /** @private */
    this.literals = literals;
    /** @private */
    this.stringLiterals = stringLiterals;
    /** @private */
    this.contextManagers = contextManagers;
  }

  /**
   * @description Applies all the context managers in order to the current token,
   * then overrides the current token kind with the first non-null result of a context manager.
   * @protected
   * @param {Token<TKind>} token - the most recently tokenised token
   * @returns {TKind | null} the new token kind. Returning null will default to the original token kind
   */
  mutateContext(token) {
    for (let manager of this.contextManagers) {
      const rtn = manager.apply(token);

      if (!!rtn)
        return rtn;
    }

    return null;
  }

  /**
   * @description Extracts the next token. Returns a token with the kind "EOF" when
   * there is no more content to tokenise.
   * @public
   * @returns {Token<TKind>} the next token
   */
  next() {
    if (this.cursor >= this.content.length)
      return {
        value: "",
        kind: "EOF",
      };

    const token =
      this.tryConsume(this.tryConsumeString) ||
      this.tryConsume(this.tryConsumeComment) ||
      this.tryConsume(this.tryConsumeNumber) ||
      this.tryConsume(this.tryConsumeLiteral) ||
      this.tryConsume(this.tryConsumeKeyword) ||
      this.tryConsume(this.tryConsumeSymbol);

    if (token)
      return token;

    const value = this.contentFromCursor[0];
    this.cursor += 1;

    return {
      value,
      kind: "OTHER",
    };
  }

  /**
   * @private
   * @param {() => Token<TKind> | null} consume
   * @returns {Token<TKind> | null}
   */
  tryConsume(consume) {
    const token = consume();

    if (!token)
      return null;

    const newKind = this.mutateContext(token);

    return {
      kind: newKind || token.kind,
      value: token.value,
    };
  };

  /**
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeString = () => {
    const largestStringLiteral = this.getStringLiteralAfter(0);

    if (!largestStringLiteral)
      return null;

    let value = largestStringLiteral.value;
    this.cursor += value.length;

    while (this.cursor < this.content.length) {
      const endOfString = this.getStringLiteralAfter(0);

      if (endOfString) {
        value += endOfString.value;
        this.cursor += endOfString.value.length;
        break;
      }

      value += this.contentFromCursor[0];
      this.cursor += 1;
    }

    return {
      kind: "STRING",
      value,
    };
  };

  /**
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeComment = () => {
    const beginLineComment = this.getBeginLineCommentLiteralAfter(0);

    if (!beginLineComment)
      return null;
  
    let value = "";

    while (this.contentFromCursor[0]) {
      if (this.contentFromCursor[0] === "\n") {
        value += "\n";
        this.cursor += 1;
        break;
      }

      value += this.contentFromCursor[0];
      this.cursor += 1;
    }

    if (!value)
      return null;

    return {
      kind: "COMMENT",
      value,
    };
  };

  /**
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeNumber = () => {
    let value = "";
    let cursor = this.cursor;
    let hasNumber = false;

    while (cursor < this.content.length) {
      const next = this.content.substring(cursor, cursor + 1);

      if (next === "-") {
        if (value.includes("-"))
          return null;

        value = "-";
        cursor += 1;
        continue;
      }

      if (next === ".") {
        if (value.includes("."))
          return null;

        value += ".";
        cursor += 1;
        continue;
      }

      if (/[0-9]/.test(next)) {
        value += next;
        cursor += 1;
        hasNumber = true;
        continue;
      }

      break;
    }

    if (value === "" || !hasNumber)
      return null;

    this.cursor = cursor;

    return {
      kind: "NUMBER",
      value: value,
    };
  };

  /**
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeLiteral = () => {
    const literal = this.getLiteralAfter(0);

    if (!literal)
      return null;

    this.cursor += literal.value.length;
    return literal;
  }

  /**
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeKeyword = () => {
    const largestKeyword = this.keywords
      .filter(w => this.contentFromCursor.startsWith(w))
      .sort((_1, _2) => _1.length > _2.length ? -1 : 1)
      [0];

    if (!largestKeyword)
      return null;

    if (this.hasCharacterAfter(largestKeyword.length))
      return null;

    this.cursor += largestKeyword.length;

    return {
      kind: "KEYWORD",
      value: largestKeyword,
    };
  }

  /**
   * @description Assumes you already called {@link Lexer.tryConsumeKeyword}
   * @private
   * @type {() => (Token<TKind> | null)}
   */
  tryConsumeSymbol = () => {
    let value = "";

    while (this.hasCharacterAfter(0)) {
      value += this.contentFromCursor[0];
      this.cursor += 1;
    }

    if (!value)
      return null;

    return {
      kind: "SYMBOL",
      value,
    };
  };

  /**
   * @private
   * @param {number} count
   * @returns {Token<TKind> | null}
   */
  getLiteralAfter(count) {
    const content = this.contentFromCursor.substring(count);

    const foundLiteral = this.literals
      .filter(l => content.startsWith(l.value))
      [0];

    return foundLiteral || null;
  }

  /**
   * @private
   * @param {number} count
   * @returns {Token<TKind> | null}
   */
  getStringLiteralAfter(count) {
    const largestStringLiteral = this.stringLiterals
      .filter(l => this.contentFromCursor.substring(count).startsWith(l.value))
      .sort((_1, _2) => _1.value.length > _2.value.length ? -1 : 1)
      [0];

    return largestStringLiteral || null;
  }

  /**
   * @private
   * @param {number} count
   * @returns {Token<TKind> | null}
   */
  getBeginLineCommentLiteralAfter(count) {
    const beginLineCommentToken = this.literals.filter(t => t.kind === "BEGIN_LINE_COMMENT")[0];

    if (!beginLineCommentToken)
      return null;

    if (this.contentFromCursor.substring(count).startsWith(beginLineCommentToken.value))
      return beginLineCommentToken;

    return null;
  }

  /**
   * @private
   * @param {number} count
   * @returns {boolean}
   */
  hasCharacterAfter(count) {
    const content = this.contentFromCursor.substring(count)[0];

    if (!content)
      return false;

    if (/\s+/.test(content))
      return false;

    return !this.getLiteralAfter(count);
  }
}
