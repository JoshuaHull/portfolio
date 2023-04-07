import { Token } from "re-lex-ation";
import { ITokenMap, Span } from "./token-map";
import { TypescriptTokenKind } from "typescript-lexer";

export class TypescriptTokenMap implements ITokenMap<TypescriptTokenKind> {
  map(token: Token<TypescriptTokenKind>): Span | null {
    switch (token.kind) {
      case "KEYWORD":
        return new Span("keyword", token.value);
      case "PROPERTY":
        return new Span("property", token.value);
      case "IMPORTED_PROPERTY":
        return new Span("imported-property", token.value);
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
      case "COMMENT":
        return new Span("comment", token.value);
      case "INTERPOLATED_STRING":
        return new Span("interpolated-string", token.value);
    }

    return null;
  }
}
