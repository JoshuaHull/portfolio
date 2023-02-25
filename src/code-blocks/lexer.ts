// loosely based on https://github.com/tsoding/ded/blob/master/src/lexer.c

const literalTokens: Token[] = [
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
    value: ";",
    kind: "SEMICOLEN",
  },
];

export type TokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "SEMICOLEN"
  | "EOF"
  | "KEYWORD"
  | "SYMBOL"
  | "OTHER"
;

export type Token = {
  value: string;
  kind: TokenKind;
};

const csharpKeywords: string[] = [
  "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char",
  "checked", "class", "const", "continue", "decimal", "default", "delegate",
  "do", "double", "else", "enum", "event", "explicit", "extern", "false",
  "finally", "fixed", "float", "for", "foreach", "goto", "if", "implicit",
  "in", "int", "interface", "internal", "is", "lock", "long", "namespace",
  "new", "null", "object", "operator", "out", "override", "params", "private",
  "protected", "public", "readonly", "ref", "return", "sbyte", "sealed",
  "short", "sizeof", "stackalloc", "static", "string", "struct", "switch",
  "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked",
  "unsafe", "ushort", "using", "virtual", "void", "volatile", "while",
];

export class Lexer {
  private cursor: number = 0;
  private keywords: string[] = csharpKeywords;
  private literals: Token[] = literalTokens;

  private get contentFromCursor() {
    return this.content.substring(this.cursor);
  }

  constructor(
    private content: string,
  ) {}

  public next(): Token {
    if (this.cursor >= this.content.length)
      return {
        value: "",
        kind: "EOF",
      };

    const literal = this.tryConsumeLiteral();

    if (literal)
      return literal;

    const keyword = this.tryConsumeKeyword();

    if (keyword)
      return keyword;

    const symbol = this.tryConsumeSymbol();

    if (symbol)
      return symbol;

    const value = this.contentFromCursor[0];
    this.cursor += 1;

    return {
      value,
      kind: "OTHER",
    };
  }

  private tryConsumeLiteral(): Token | null {
    const literal = this.getLiteralAfter(0);
    
    if (!literal)
      return null;

    this.cursor += literal.value.length;
    return literal;
  }

  private tryConsumeKeyword(): Token | null {
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
  private tryConsumeSymbol(): Token | null {
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

  private getLiteralAfter(count: number): Token | null {
    const content = this.contentFromCursor.substring(count);

    const foundLiteral = this.literals
      .filter(l => content.startsWith(l.value))
      [0];

    return foundLiteral || null;
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
