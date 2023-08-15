import foldablePanelContent from "content:html:src/foldables/foldable-panel";

export const registerFoldablePanel = () => {
  const template = document.createElement("template");

  template.innerHTML = getFoldablePanelHtml();

  attachFoldablePanelTo(template);
};

export const getFoldablePanelHtml = () => {
  return foldablePanelContent as string;
};

export const attachFoldablePanelTo = (element: HTMLTemplateElement) => {
  class FoldablePanel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("panelTitle");
      this.#upgradeProperty("panelContent");
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

    get panelTitle(): string {
      return this.getAttribute("panelTitle") ?? "";
    }

    set panelTitle(value: string) {
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__label")!;
      label.insertAdjacentText("beforeend", value);
    }

    get panelContent(): string {
      return this.getAttribute("panelContent") ?? "";
    }

    set panelContent(value: string) {
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__description")!;
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
