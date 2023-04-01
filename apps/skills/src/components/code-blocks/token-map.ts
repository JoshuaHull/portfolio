import { Token } from "./lexer";

export class Span {
  constructor(
    private clazz: string,
    private value: string,
  ) {}

  toHtml() {
    return `<span class="${this.clazz}">${this.value}</span>`;
  }

  toVNode() {
    return h("span", { class: this.clazz, innerHTML: this.value });
  }
}

export interface ITokenMap<TKind> {
  map(token: Token<TKind>): Span | null;
}
