import { Lexer } from "re-lex-ation";

export type VueTokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "OPEN_ANGLE"
  | "CLOSE_ANGLE"
  | "OPEN_ANGLE_SLASH"
  | "SEMICOLON"
  | "DOT"
  | "EOF"
  | "KEYWORD"
  | "SYMBOL"
  | "PROPERTY"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
  | "SLASH"
  | "COLON"
  | "EQUALS"
  | "HASH"
  | "OTHER"
;

export class VueLexer extends Lexer<VueTokenKind> {
  constructor(
    content: string,
  );
}
