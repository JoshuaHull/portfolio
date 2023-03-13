import { ContextMap, Lexer, Token } from "./lexer";

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

const csharpContextMap: ContextMap = {
  "SYMBOL": {
    kind: "PROPERTY",
    close: "dot",
  },
  "DOT": {
    open: "dot",
  },
};

export class CsharpLexer extends Lexer {
  constructor(
    content: string
  ) {
    super(
      content,
      csharpKeywords.concat(csharpContextualKeywords),
      literalTokens,
      stringLiteralTokens,
      csharpContextMap,
    );
  }
}
