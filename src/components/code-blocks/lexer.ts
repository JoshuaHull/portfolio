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
    value: ";",
    kind: "SEMICOLON",
  },
];

const stringLiteralTokens: Token[] = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
  },
  {
    value: "$\"",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
  {
    value: "@\"",
    kind: "STRING_LITERAL",
  },
  {
    value: "$@\"",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
  {
    value: "@$\"",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
];

export type TokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "OPEN_ANGLE"
  | "CLOSE_ANGLE"
  | "SEMICOLON"
  | "DOT"
  | "EOF"
  | "KEYWORD"
  | "SYMBOL"
  | "PROPERTY"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
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

const csharpContextualKeywords: string[] = [
  "add", "and", "alias", "ascending", "args", "async", "await", "by",
  "descending", "dynamic", "equals", "file", "from", "get", "global",
  "group", "init", "into", "join", "let", "managed", "nameof", "nint",
  "not", "notnull", "nuint", "on", "or", "orderby", "partial", "partial",
  "record", "remove", "required", "scoped", "select", "set", "unmanaged",
  "value", "var", "when", "where", "with", "yield",
];

const csharpContextMap: { [kind in TokenKind]?: { kind?: TokenKind, close?: string, open?: string } } = {
  "SYMBOL": {
    kind: "PROPERTY",
    close: "dot",
  },
  "DOT": {
    open: "dot",
  },
};

export class Lexer {
  private cursor: number = 0;
  private keywords: string[] = [...csharpKeywords, ...csharpContextualKeywords];
  private literals: Token[] = literalTokens;
  private stringLiterals: Token[] = stringLiteralTokens;
  private contexts: string[] = [];

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

    const token =
      this.tryConsume(this.tryConsumeString) ||
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

  private tryConsume(consume: () => Token | null): Token | null {
    const token = consume();

    if (!token)
      return null;

    const newKind = this.mutateContext(token.kind);

    return {
      kind: newKind || token.kind,
      value: token.value,
    };
  }

  private tryConsumeString: () => (Token | null) = () => {
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

  private tryConsumeLiteral: () => (Token | null) = () => {
    const literal = this.getLiteralAfter(0);

    if (!literal)
      return null;

    this.cursor += literal.value.length;
    return literal;
  }

  private tryConsumeKeyword: () => (Token | null) = () => {
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
  private tryConsumeSymbol: () => (Token | null) = () => {
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

  private mutateContext(kind: TokenKind): TokenKind | null {
    const context = csharpContextMap[kind];

    if (!context)
      return null;

    if (context.open)
      this.contexts.push(context.open);

    const idx = this.contexts.findIndex(c => c === context.close);

    if (idx < 0)
      return null;

    this.contexts.splice(idx, 1)

    return context.kind || null;
  }

  private getLiteralAfter(count: number): Token | null {
    const content = this.contentFromCursor.substring(count);

    const foundLiteral = this.literals
      .filter(l => content.startsWith(l.value))
      [0];

    return foundLiteral || null;
  }

  private getStringLiteralAfter(count: number): Token | null {
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
