import { Lexer } from "re-lex-ation";

/**
 * @typedef {import("./../re-lex-ation/lexer").Token<VueTokenKind>} VueToken
 */

/**
 * @typedef {import("./../re-lex-ation/lexer").IContextManager<VueTokenKind>} IVueContextManager
 */

/**
 * @typedef {"OPEN_PAREN" |
 * "CLOSE_PAREN" |
 * "OPEN_CURLY" |
 * "CLOSE_CURLY" |
 * "OPEN_ANGLE" |
 * "CLOSE_ANGLE" |
 * "OPEN_ANGLE_SLASH" |
 * "SEMICOLON" |
 * "DOT" |
 * "EOF" |
 * "KEYWORD" |
 * "SYMBOL" |
 * "PROPERTY" |
 * "STRING_LITERAL" |
 * "INTERPOLATED_STRING_LITERAL" |
 * "STRING" |
 * "SLASH" |
 * "COLON" |
 * "HASH" |
 * "OTHER" |
 * "EQUALS"} VueTokenKind
 */

/**
 * @type {VueToken[]}
 */
const literalTokens = [
  {
    value: "(",
    kind: "OPEN_PAREN",
  },
  {
    value: ")",
    kind: "CLOSE_PAREN",
  },
  {
    value: "{",
    kind: "OPEN_CURLY",
  },
  {
    value: "}",
    kind: "CLOSE_CURLY",
  },
  {
    value: "</",
    kind: "OPEN_ANGLE_SLASH",
  },
  {
    value: "<",
    kind: "OPEN_ANGLE",
  },
  {
    value: ">",
    kind: "CLOSE_ANGLE",
  },
  {
    value: ".",
    kind: "DOT",
  },
  {
    value: ":",
    kind: "COLON",
  },
  {
    value: ";",
    kind: "SEMICOLON",
  },
  {
    value: "/",
    kind: "SLASH",
  },
  {
    value: "=",
    kind: "EQUALS",
  },
  {
    value: "#",
    kind: "HASH",
  },
];

/**
 * @type {VueToken[]}
 */
const stringLiteralTokens = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
  },
  {
    value: "'",
    kind: "STRING_LITERAL",
  },
  {
    value: "`",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
];

/**
 * @extends {Lexer<VueTokenKind>}
 */
export class VueLexer extends Lexer {
  /**
   * @param {string} content - Vue string which will be tokenised
   */
  constructor(
    content,
  ) {
    super(
      content,
      ["@media"],
      literalTokens,
      stringLiteralTokens,
      [
        new HtmlTagContextManager(),
        new CssPropertyContextManager(),
      ],
    );
  }
}

/**
 * @implements {IVueContextManager}
 */
class HtmlTagContextManager {
  /**
   * @private
   * @type {boolean}
   */
  openingHtmlTag = false;

  /**
   * @private
   * @type {boolean}
   */
  closingHtmlTag = false;

  /**
   * @private
   * @type {boolean}
   */
  inHtmlTag = false;

  /**
   * @private
   * @type {boolean}
   */
  hashHtmlProperty = false;

  /**
   * @inheritdoc {@link IVueContextManager.apply}
   * @param {VueToken} token
   */
  apply(token) {
    if (token.kind === "OPEN_ANGLE") {
      this.openingHtmlTag = true;
      this.inHtmlTag = true;
      return null;
    }

    if (token.kind === "OPEN_ANGLE_SLASH") {
      this.closingHtmlTag = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.openingHtmlTag) {
      this.openingHtmlTag = false;
      return "KEYWORD";
    }

    if (token.kind === "SYMBOL" && this.hashHtmlProperty) {
      this.hashHtmlProperty = false;
      return "PROPERTY";
    }

    if (token.kind === "SYMBOL" && this.closingHtmlTag) {
      this.closingHtmlTag = false;
      return "KEYWORD";
    }

    if (token.kind === "HASH" && this.inHtmlTag) {
      this.hashHtmlProperty = true;
      return null;
    }

    if (token.kind === "CLOSE_ANGLE")
      this.inHtmlTag = false;

    this.closingHtmlTag = false;
    this.openingHtmlTag = false;
    this.hashHtmlProperty = false;
    return null;
  }
}

/**
 * @implements {IVueContextManager}
 */
class CssPropertyContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @private
   * @param {VueToken} token
   * @returns {boolean}
   */
  opensContext = (token) =>
    token.kind === "COLON";

  /**
   * @private
   * @param {VueToken} token
   * @returns {boolean}
   */
  closesContext = (token) =>
    this.inContext && (
      token.kind === "SEMICOLON" || token.kind === "CLOSE_PAREN"
    );

  /**
   * @inheritdoc {@link IVueContextManager.apply}
   * @param {VueToken} token
   */
  apply(token) {
    if (this.opensContext(token)) {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext)
      return "PROPERTY";

    if (this.closesContext(token)) {
      this.inContext = false;
      return null;
    }

    return null;
  }
}
