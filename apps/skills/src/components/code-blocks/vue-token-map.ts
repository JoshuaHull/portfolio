import { VueTokenKind } from "vue-lexer";
import { Token } from "re-lex-ation";
import { ITokenMapper, SpanVue } from "highlighter-vue";

export class VueTokenMap implements ITokenMapper<VueTokenKind> {
  map(token: Token<VueTokenKind>): SpanVue | null {
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
    }

    return null;
  }
}
