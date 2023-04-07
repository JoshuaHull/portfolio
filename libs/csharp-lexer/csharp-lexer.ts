import { IContextManager, Lexer, Token } from "re-lex-ation";

export type CsharpTokenKind =
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
  | "TYPE"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
  | "EQUALS"
  | "OTHER"
;

const literalTokens: Token<CsharpTokenKind>[] = [
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

const stringLiteralTokens: Token<CsharpTokenKind>[] = [
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

export class CsharpLexer extends Lexer<CsharpTokenKind> {
  constructor(
    content: string
  ) {
    super(
      content,
      csharpKeywords.concat(csharpContextualKeywords),
      literalTokens,
      stringLiteralTokens,
      [
        new PropertyContextManager(),
        new NewValueContextManager(),
        new AsyncTypeContextManager(),
        new ReturnTypeContextManager(),
      ],
    );
  }
}

class PropertyContextManager implements IContextManager<CsharpTokenKind> {
  private inContext: boolean = false;

  public apply(token: Token<CsharpTokenKind>): CsharpTokenKind | null {
    if (token.kind === "DOT") {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext) {
      this.inContext = false;
      return "PROPERTY";
    }

    this.inContext = false;
    return null;
  }
}

class NewValueContextManager implements IContextManager<CsharpTokenKind> {
  private inContext: boolean = false;

  public apply(token: Token<CsharpTokenKind>): CsharpTokenKind | null {
    if (token.kind === "KEYWORD" && token.value === "new") {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext) {
      this.inContext = false;
      return "TYPE";
    }

    this.inContext = false;
    return null;
  }
}

class AsyncTypeContextManager implements IContextManager<CsharpTokenKind> {
  private inContext: boolean = false;

  public apply(token: Token<CsharpTokenKind>): CsharpTokenKind | null {
    if (token.kind === "KEYWORD" && token.value === "async") {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext) {
      this.inContext = false;
      return "TYPE";
    }

    this.inContext = false;
    return null;
  }
}

class ReturnTypeContextManager implements IContextManager<CsharpTokenKind> {
  private inContext: boolean = false;

  private opensContext(token: Token<CsharpTokenKind>) {
    return token.kind === "KEYWORD" && (
      token.value === "private" ||
      token.value === "public" ||
      token.value === "readonly"
    );
  }

  public apply(token: Token<CsharpTokenKind>): CsharpTokenKind | null {
    if (this.opensContext(token)) {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext) {
      this.inContext = false;
      return "TYPE";
    }

    this.inContext = false;
    return null;
  }
}
