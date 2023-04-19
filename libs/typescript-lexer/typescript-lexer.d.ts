import { Lexer } from "re-lex-ation";

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
  | "PROPERTY"
  | "IMPORTED_PROPERTY"
  | "TYPE"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "INTERPOLATED_STRING"
  | "EQUALS"
;

export class TypescriptLexer extends Lexer<TypescriptTokenKind> {
  constructor(
    content: string,
  );
}
