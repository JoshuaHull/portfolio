import { SpanHtml } from "highlighter-html";

export class TypescriptTokenMap {
  map(token) {
    switch (token.kind) {
      case "KEYWORD":
        return new SpanHtml("keyword", token.value);
      case "PROPERTY":
        return new SpanHtml("property", token.value);
      case "IMPORTED_PROPERTY":
        return new SpanHtml("imported-property", token.value);
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
      case "TYPE":
        return new SpanHtml("type", token.value);
      case "NUMBER":
        return new SpanHtml("number", token.value);
      case "COMMENT":
        return new SpanHtml("comment", token.value);
      case "INTERPOLATED_STRING":
        return new SpanHtml("interpolated-string", token.value);
    }

    return null;
  }
}
