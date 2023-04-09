import { h } from "vue";

export class Highlighter {
  constructor(
    lexer,
    tokenMap,
  ) {
    this.lexer = lexer;
    this.tokenMap = tokenMap;
  }

  toHtml() {
    let rtn = "";

    for (;;) {
      const next = this.lexer.next();

      if (next.kind === "EOF")
        return rtn;

      const span = this.tokenMap.map(next);
      const add = span?.toHtml() ?? next.value;
      rtn += add;
    }
  }

  toVNode() {
    let rtn = [];

    for (;;) {
      const next = this.lexer.next();

      if (next.kind === "EOF")
        return h("pre", rtn);

      const span = this.tokenMap.map(next);
      const add = span?.toVNode() ?? next.value;
      rtn = [...rtn, add];
    }
  }
}
