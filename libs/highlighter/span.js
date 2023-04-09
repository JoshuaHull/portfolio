import { h } from "vue";

export class Span {
  constructor(
    clazz,
    value,
  ) {
    this.clazz = clazz;
    this.value = value;
  }

  toHtml() {
    return `<span class="${this.clazz}">${this.value}</span>`;
  }

  toVNode() {
    return h("span", { class: this.clazz, innerHTML: this.value });
  }
}
