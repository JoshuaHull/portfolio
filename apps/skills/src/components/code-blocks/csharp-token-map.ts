import { CSharpTokenKind } from "csharp-lexer";
import { Token } from "re-lex-ation";
import { ITokenMapper, Span } from "highlighter";

export class CSharpTokenMap implements ITokenMapper<CSharpTokenKind> {
  map(token: Token<CSharpTokenKind>): Span | null {
    switch (token.kind) {
      case "KEYWORD":
        return new Span("keyword", token.value);
      case "PROPERTY":
        return new Span("property", token.value);
      case "SYMBOL":
        return new Span("symbol", token.value);
      case "OPEN_PAREN":
      case "CLOSE_PAREN":
      case "OPEN_CURLY":
      case "CLOSE_CURLY":
      case "OPEN_ANGLE":
      case "CLOSE_ANGLE":
      case "DOT":
      case "SEMICOLON":
        return new Span("literal", token.value);
      case "STRING":
        return new Span("string", token.value);
      case "TYPE":
        return new Span("type", token.value);
      case "NUMBER":
        return new Span("number", token.value);
    }

    return null;
  }
}
