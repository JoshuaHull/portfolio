import { Lexer } from "re-lex-ation";

/**
 * @typedef {import("./../re-lex-ation/lexer").Token<CSharpTokenKind>} CSharpToken
 */

/**
 * @typedef {import("./../re-lex-ation/lexer").IContextManager<CSharpTokenKind>} ICSharpContextManager
 */

/**
 * @typedef {"OPEN_PAREN" |
 * "CLOSE_PAREN" |
 * "OPEN_CURLY" |
 * "CLOSE_CURLY" |
 * "OPEN_ANGLE" |
 * "CLOSE_ANGLE" |
 * "SEMICOLON" |
 * "DOT" |
 * "PROPERTY" |
 * "TYPE" |
 * "STRING_LITERAL" |
 * "INTERPOLATED_STRING_LITERAL" |
 * "STRING" |
 * "EQUALS"} CSharpTokenKind
 */

/**
 * @type {CSharpToken[]}
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
];

/**
 * @type {CSharpToken[]}
 */
const stringLiteralTokens = [
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

/**
 * @type {string[]}
 */
const csharpKeywords = [
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

/**
 * @type {string[]}
 */
const csharpContextualKeywords = [
  "add", "and", "alias", "ascending", "args", "async", "await", "by",
  "descending", "dynamic", "equals", "file", "from", "get", "global",
  "group", "init", "into", "join", "let", "managed", "nameof", "nint",
  "not", "notnull", "nuint", "on", "or", "orderby", "partial", "partial",
  "record", "remove", "required", "scoped", "select", "set", "unmanaged",
  "value", "var", "when", "where", "with", "yield",
];

/**
 * @extends {Lexer<CSharpTokenKind>}
 */
export class CSharpLexer extends Lexer {
  /**
   * @param {string} content - C# string which will be tokenised
   */
  constructor(
    content,
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

/**
 * @implements {ICSharpContextManager}
 */
class PropertyContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ICSharpContextManager.apply}
   * @param {CSharpToken} token
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
 * @implements {ICSharpContextManager}
 */
class NewValueContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ICSharpContextManager.apply}
   * @param {CSharpToken} token
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
 * @implements {ICSharpContextManager}
 */
class AsyncTypeContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @inheritdoc {@link ICSharpContextManager.apply}
   * @param {CSharpToken} token
   */
  apply(token) {
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

/**
 * @implements {ICSharpContextManager}
 */
class ReturnTypeContextManager {
  /**
   * @private
   * @type {boolean}
   */
  inContext = false;

  /**
   * @private
   * @param {CSharpToken} token
   * @returns {boolean}
   */
  opensContext(token) {
    return token.kind === "KEYWORD" && (
      token.value === "private" ||
      token.value === "public" ||
      token.value === "readonly"
    );
  }

  /**
   * @inheritdoc {@link ICSharpContextManager.apply}
   * @param {CSharpToken} token
   */
  apply(token) {
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
