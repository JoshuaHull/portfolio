import { h } from "vue";

export class SpanVue {
  constructor(
    clazz,
    value,
  ) {
    this.clazz = clazz;
    this.value = value;
  }

  toVNode() {
    return h("span", { class: this.clazz, innerHTML: this.value });
  }
}
