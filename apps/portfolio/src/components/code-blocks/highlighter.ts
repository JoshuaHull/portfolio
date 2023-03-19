import { VNode } from "vue";
import { Lexer } from "./lexer";

export class Highlighter<TKind> {
  constructor(
    private lexer: Lexer<TKind>,
  ) {}

  public toHtml(): string {
    let rtn = "";

    for (;;) {
      const next = this.lexer.next();

      if (next.kind === "EOF")
        return rtn;

      switch (next.kind) {
        case "KEYWORD":
          rtn += `<span class="keyword">${next.value}</span>`;
          break;
        case "PROPERTY":
          rtn += `<span class="property">${next.value}</span>`;
          break;
        case "SYMBOL":
          rtn += `<span class="symbol">${next.value}</span>`;
          break;
        case "OPEN_PAREN":
        case "CLOSE_PAREN":
        case "OPEN_CURLY":
        case "CLOSE_CURLY":
        case "OPEN_ANGLE":
        case "CLOSE_ANGLE":
        case "DOT":
        case "SEMICOLON":
          rtn += `<span class="literal">${next.value}</span>`;
          break;
        case "STRING":
          rtn += `<span class="string">${next.value}</span>`;
          break;
        default:
          rtn += next.value;
      }
    }
  }

  public toVueRenderFunction(): () => VNode {
    let rtn: (VNode | string)[] = [];

    for (;;) {
      const next = this.lexer.next();

      if (next.kind === "EOF")
        return () => h("pre", rtn);

      switch (next.kind) {
        case "KEYWORD":
          rtn = [...rtn, h("span", { class: "keyword", innerHTML: next.value })];
          break;
        case "PROPERTY":
          rtn = [...rtn, h("span", { class: "property", innerHTML: next.value })];
          break;
        case "SYMBOL":
          rtn = [...rtn, h("span", { class: "symbol", innerHTML: next.value })];
          break;
        case "OPEN_PAREN":
        case "CLOSE_PAREN":
        case "OPEN_CURLY":
        case "CLOSE_CURLY":
        case "OPEN_ANGLE":
        case "CLOSE_ANGLE":
        case "DOT":
        case "SEMICOLON":
          rtn = [...rtn, h("span", { class: "literal", innerHTML: next.value })];
          break;
        case "STRING":
          rtn = [...rtn, h("span", { class: "string", innerHTML: next.value })];
          break;
        default:
          rtn = [...rtn, next.value];
      }
    }
  }
}
