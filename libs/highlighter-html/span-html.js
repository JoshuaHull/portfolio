export class SpanHtml {
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
}
