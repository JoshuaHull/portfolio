// loosely based on https://github.com/tsoding/ded/blob/master/src/lexer.c

export type Token<TKind> = {
  value: string;
  kind: TKind | "EOF" | "OTHER" | "STRING" | "KEYWORD" | "SYMBOL" | "NUMBER";
};

export abstract class Lexer<TKind> {
  private cursor: number = 0;

  private get contentFromCursor() {
    return this.content.substring(this.cursor);
  }

  constructor(
    private content: string,
    private keywords: string[],
    private literals: Token<TKind>[],
    private stringLiterals: Token<TKind>[],
  ) {}

  protected abstract mutateContext(token: Token<TKind>): TKind | null;

  public next(): Token<TKind> {
    if (this.cursor >= this.content.length)
      return {
        value: "",
        kind: "EOF",
      };

    const token =
      this.tryConsume(this.tryConsumeString) ||
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

  private tryConsume(consume: () => Token<TKind> | null): Token<TKind> | null {
    const token = consume();

    if (!token)
      return null;

    const newKind = this.mutateContext(token);

    return {
      kind: newKind || token.kind,
      value: token.value,
    };
  }

  private tryConsumeString: () => (Token<TKind> | null) = () => {
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
  }

  private tryConsumeNumber: () => (Token<TKind> | null) = () => {
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

  private tryConsumeLiteral: () => (Token<TKind> | null) = () => {
    const literal = this.getLiteralAfter(0);

    if (!literal)
      return null;

    this.cursor += literal.value.length;
    return literal;
  }

  private tryConsumeKeyword: () => (Token<TKind> | null) = () => {
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

  // assumes you already called `tryConsumeKeyword`
  private tryConsumeSymbol: () => (Token<TKind> | null) = () => {
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
  }

  private getLiteralAfter(count: number): Token<TKind> | null {
    const content = this.contentFromCursor.substring(count);

    const foundLiteral = this.literals
      .filter(l => content.startsWith(l.value))
      [0];

    return foundLiteral || null;
  }

  private getStringLiteralAfter(count: number): Token<TKind> | null {
    const largestStringLiteral = this.stringLiterals
      .filter(l => this.contentFromCursor.substring(count).startsWith(l.value))
      .sort((_1, _2) => _1.value.length > _2.value.length ? -1 : 1)
      [0];

    return largestStringLiteral || null;
  }

  private hasCharacterAfter(count: number): boolean {
    const content = this.contentFromCursor.substring(count)[0];

    if (!content)
      return false;

    if (/\s+/.test(content))
      return false;

    return !this.getLiteralAfter(count);
  }
}
