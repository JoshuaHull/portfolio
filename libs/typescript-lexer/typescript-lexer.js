import { Lexer } from "re-lex-ation";

/**
 * @typedef {import("./../re-lex-ation/lexer").Token<TypescriptTokenKind>} TypescriptToken
 */

/**
 * @typedef {import("./../re-lex-ation/lexer").IContextManager<TypescriptTokenKind>} ITypescriptContextManager
 */

/**
 * @typedef {"OPEN_PAREN" |
 * "CLOSE_PAREN" |
 * "OPEN_CURLY" |
 * "CLOSE_CURLY" |
 * "OPEN_ANGLE" |
 * "CLOSE_ANGLE" |
 * "SEMICOLON" |
 * "COMMA" |
 * "DOT" |
 * "PROPERTY" |
 * "IMPORTED_PROPERTY" |
 * "TYPE" |
 * "STRING_LITERAL" |
 * "INTERPOLATED_STRING_LITERAL" |
 * "INTERPOLATED_STRING" |
 * "EQUALS"} TypescriptTokenKind
 */

/**
 * @type {TypescriptToken[]}
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

/**
 * @type {TypescriptToken[]}
 */
const stringLiteralTokens = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
  },
];

/**
 * @type {string[]}
 */
const typescriptKeywords = [
  "break", "as", "any", "switch", "case", "if", "throw", "else", "var",
  "number", "string", "get", "module", "type", "instanceof", "typeof", "public",
  "private", "enum", "export", "finally", "for", "while", "void", "null",
  "super", "this", "new", "in", "return", "true", "false", "any", "extends",
  "static", "let", "package", "implements", "interface", "function", "new",
  "try", "yield", "const", "continue", "do", "catch", "import", "async",
  "await", "from",
];

/**
 * @type {string[]}
 */
const typescriptContextualKeywords = [
];

/**
 * @extends {Lexer<TypescriptTokenKind>}
 */
export class TypescriptLexer extends Lexer {
  /**
   * @param {string} content - typescript string which will be tokenised
   */
  constructor(
    content,
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

/**
 * @implements {ITypescriptContextManager}
 */
class PropertyContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ITypescriptContextManager.apply}
   * @param {TypescriptToken} token
   */
  apply(token) {
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

/**
 * @implements {ITypescriptContextManager}
 */
class NewValueContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ITypescriptContextManager.apply}
   * @param {TypescriptToken} token
   */
  apply(token) {
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

/**
 * @implements {ITypescriptContextManager}
 */
class InterpolatedStringContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ITypescriptContextManager.apply}
   * @param {TypescriptToken} token
   */
  apply(token) {
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

/**
 * @implements {ITypescriptContextManager}
 */
class ImportedPropertiesContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @private
   * @type {string[]}
   */
  imports = [];

  /**
   * @inheritdoc {@link ITypescriptContextManager.apply}
   * @param {TypescriptToken} token
   */
  apply(token) {
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
