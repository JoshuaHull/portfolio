import { VueTokenKind } from "./vue-lexer";
import { Token } from "re-lex-ation";
import { ITokenMap, Span } from "./token-map";

export class VueTokenMap implements ITokenMap<VueTokenKind> {
  map(token: Token<VueTokenKind>): Span | null {
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
    }

    return null;
  }
}
