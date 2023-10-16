import { h } from "vue";

export class HighlighterVue {
  constructor(
    lexer,
    tokenMap,
  ) {
    this.lexer = lexer;
    this.tokenMap = tokenMap;
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
