import { Lexer } from "re-lex-ation";

export type CSharpTokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "OPEN_ANGLE"
  | "CLOSE_ANGLE"
  | "SEMICOLON"
  | "DOT"
  | "PROPERTY"
  | "TYPE"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
  | "EQUALS"
;

export class CSharpLexer extends Lexer<CSharpTokenKind> {
  constructor(
    content: string,
  );
}
