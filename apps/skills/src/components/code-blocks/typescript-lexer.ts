import { IContextManager, Lexer, Token } from "re-lex-ation";

export type TypescriptTokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "OPEN_ANGLE"
  | "CLOSE_ANGLE"
  | "SEMICOLON"
  | "COMMA"
  | "DOT"
  | "EOF"
  | "KEYWORD"
  | "SYMBOL"
  | "PROPERTY"
  | "IMPORTED_PROPERTY"
  | "TYPE"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
  | "INTERPOLATED_STRING"
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
    value: ",",
    kind: "COMMA",
  },
  {
    value: "//",
    kind: "BEGIN_LINE_COMMENT",
  },
  {
    value: "`",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
];

const stringLiteralTokens: Token<TypescriptTokenKind>[] = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
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
  constructor(
    content: string
  ) {
    super(
      content,
      typescriptKeywords.concat(typescriptContextualKeywords),
      literalTokens,
      stringLiteralTokens,
      [
        new InterpolatedStringContextManager(),
        new ImportedPropertiesContextManager(),
        new PropertyContextManager(),
        new NewValueContextManager(),
      ],
    );
  }
}

class PropertyContextManager implements IContextManager<TypescriptTokenKind> {
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

class NewValueContextManager implements IContextManager<TypescriptTokenKind> {
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

class InterpolatedStringContextManager implements IContextManager<TypescriptTokenKind> {
  private inContext: boolean = false;

  public apply(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null {
    if (token.kind === "INTERPOLATED_STRING_LITERAL" && this.inContext) {
      this.inContext = false;
      return "INTERPOLATED_STRING";
    }

    if (token.kind === "INTERPOLATED_STRING_LITERAL" && !this.inContext) {
      this.inContext = true;
      return "INTERPOLATED_STRING";
    }

    return this.inContext ? "INTERPOLATED_STRING" : null;
  }
}

class ImportedPropertiesContextManager implements IContextManager<TypescriptTokenKind> {
  private inContext: boolean = false;
  private imports: string[] = [];

  public apply(token: Token<TypescriptTokenKind>): TypescriptTokenKind | null {
    if (token.kind === "KEYWORD" && token.value === "import") {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext) {
      this.imports.push(token.value);
      return null;
    }

    if (token.kind === "KEYWORD" && token.value === "from" && this.inContext) {
      this.inContext = false;
      return null;
    }

    if (token.kind === "SYMBOL" && this.imports.includes(token.value)) {
      return "IMPORTED_PROPERTY";
    }

    return null;
  }
}
