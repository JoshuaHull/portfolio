import { CSharpTokenKind } from "csharp-lexer";
import { Token } from "re-lex-ation";
import { ITokenMapper, SpanVue } from "highlighter-vue";

export class CSharpTokenMap implements ITokenMapper<CSharpTokenKind> {
  map(token: Token<CSharpTokenKind>): SpanVue | null {
    switch (token.kind) {
      case "KEYWORD":
        return new SpanVue("keyword", token.value);
      case "PROPERTY":
        return new SpanVue("property", token.value);
      case "SYMBOL":
        return new SpanVue("symbol", token.value);
      case "OPEN_PAREN":
      case "CLOSE_PAREN":
      case "OPEN_CURLY":
      case "CLOSE_CURLY":
      case "OPEN_ANGLE":
      case "CLOSE_ANGLE":
      case "DOT":
      case "SEMICOLON":
        return new SpanVue("literal", token.value);
      case "STRING":
        return new SpanVue("string", token.value);
      case "TYPE":
        return new SpanVue("type", token.value);
      case "NUMBER":
        return new SpanVue("number", token.value);
    }

    return null;
  }
}
