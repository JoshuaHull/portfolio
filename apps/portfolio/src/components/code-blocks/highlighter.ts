import { VNode } from "vue";
import { Lexer } from "./lexer";
import { ITokenMap } from "./token-map";

export class Highlighter<TKind> {
  constructor(
    private lexer: Lexer<TKind>,
    private tokenMap: ITokenMap<TKind>,
  ) {}

  public toHtml(): string {
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

  public toVueRenderFunction(): () => VNode {
    let rtn: (VNode | string)[] = [];

    for (;;) {
      const next = this.lexer.next();

      if (next.kind === "EOF")
        return () => h("pre", rtn);

      const span = this.tokenMap.map(next);
      const add = span?.toVNode() ?? next.value;
      rtn = [...rtn, add];
    }
  }
}
