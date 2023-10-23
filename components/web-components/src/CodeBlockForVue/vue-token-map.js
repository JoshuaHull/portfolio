import { SpanHtml } from "highlighter-html";

export class VueTokenMap {
  map(token) {
    switch (token.kind) {
      case "KEYWORD":
        return new SpanHtml("keyword", token.value);
      case "PROPERTY":
        return new SpanHtml("property", token.value);
      case "SYMBOL":
        return new SpanHtml("symbol", token.value);
      case "OPEN_PAREN":
      case "CLOSE_PAREN":
      case "OPEN_CURLY":
      case "CLOSE_CURLY":
      case "OPEN_ANGLE":
      case "CLOSE_ANGLE":
      case "DOT":
      case "SEMICOLON":
        return new SpanHtml("literal", token.value);
      case "STRING":
        return new SpanHtml("string", token.value);
    }

    return null;
  }
}
