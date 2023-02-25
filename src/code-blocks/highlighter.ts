import { VNode } from "vue";
import { Lexer } from "./lexer";

export class Highlighter {
  constructor(
    private lexer: Lexer,
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
        case "SYMBOL":
          rtn += `<span class="symbol">${next.value}</span>`;
          break;
        case "OPEN_PAREN":
        case "CLOSE_PAREN":
        case "OPEN_CURLY":
        case "CLOSE_CURLY":
        case "SEMICOLEN":
          rtn += `<span class="literal">${next.value}</span>`;
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
        case "SYMBOL":
          rtn = [...rtn, h("span", { class: "symbol", innerHTML: next.value })];
          break;
        case "OPEN_PAREN":
        case "CLOSE_PAREN":
        case "OPEN_CURLY":
        case "CLOSE_CURLY":
        case "SEMICOLEN":
          rtn = [...rtn, h("span", { class: "literal", innerHTML: next.value })];
          break;
        default:
          rtn = [...rtn, next.value];
      }
    }
  }
}
