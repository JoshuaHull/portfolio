import { Lexer, Token } from "./lexer";

export type TypescriptTokenKind =
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

const literalTokens: Token<TypescriptTokenKind>[] = [
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
  {
    value: "//",
    kind: "BEGIN_LINE_COMMENT",
  },
];

const stringLiteralTokens: Token<TypescriptTokenKind>[] = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
  },
  {
    value: "`",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
];

const typescriptKeywords: string[] = [
  "break", "as", "any", "switch", "case", "if", "throw", "else", "var",
  "number", "string", "get", "module", "type", "instanceof", "typeof", "public",
  "private", "enum", "export", "finally", "for", "while", "void", "null",
  "super", "this", "new", "in", "return", "true", "false", "any", "extends",
  "static", "let", "package", "implements", "interface", "function", "new",
  "try", "yield", "const", "continue", "do", "catch", "import", "async",
  "await", "from",
];

const typescriptContextualKeywords: string[] = [
];

export class TypescriptLexer extends Lexer<TypescriptTokenKind> {
  private contextManagers: IContextManager[];

  constructor(
    content: string
  ) {
    super(
      content,
      typescriptKeywords.concat(typescriptContextualKeywords),
      literalTokens,
      stringLiteralTokens,
    );

    this.contextManagers = [
      new PropertyContextManager(),
      new NewValueContextManager(),
    ];
  }

  protected override mutateContext(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null {
    for (let manager of this.contextManagers) {
      const rtn = manager.apply(token);

      if (!!rtn)
        return rtn;
    }

    return null;
  }
}

interface IContextManager {
  apply(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null;
}

class PropertyContextManager implements IContextManager {
  private inContext: boolean = false;

  public apply(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null {
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

class NewValueContextManager implements IContextManager {
  private inContext: boolean = false;

  public apply(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null {
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
