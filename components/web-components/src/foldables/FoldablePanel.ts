import foldablePanelContent from "content:html:src/foldables/foldable-panel";

export const registerFoldablePanel = () => {
  const template = document.createElement("template");

  template.innerHTML = foldablePanelContent as string;

  class FoldablePanel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("title");
    }

    get checkboxId(): string {
      return this.getAttribute("checkboxId") ?? "";
    }

    set checkboxId(value: string) {
      const checkbox = this.shadowRoot!.querySelector(".foldable__checkbox")!;
      checkbox.id = value;
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__label")!;
      label.htmlFor = value;
    }

    get title(): string {
      return this.getAttribute("title") ?? "";
    }

    set title(value: string) {
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__label")!;
      label.insertAdjacentText("beforeend", value);
    }

    #upgradeProperty(prop: string) {
      if (this.hasOwnProperty(prop)) {
        // @ts-expect-error implicit-any
        const value = this[prop];
        // @ts-expect-error implicit-any
        delete this[prop];
        // @ts-expect-error implicit-any
        this[prop] = value;
      }
    }
  }

  customElements.define("fsj-foldable-panel", FoldablePanel);
};
