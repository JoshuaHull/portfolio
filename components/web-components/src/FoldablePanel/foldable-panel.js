import foldablePanelContent from "content:html:src/FoldablePanel/foldable-panel";

/**
 * @type {() => void}
 */
export const registerFoldablePanel = () => {
  const template = document.createElement("template");

  template.innerHTML = getFoldablePanelHtml();

  attachFoldablePanelTo(template);
};

/**
 * @type {() => string}
 */
export const getFoldablePanelHtml = () => {
  return foldablePanelContent;
};

/**
 * @type {(element: HTMLTemplateElement) => void}
 */
export const attachFoldablePanelTo = (element) => {
  class FoldablePanel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("panelTitle");
      this.#upgradeProperty("panelContent");
    }

    /**
     * @returns {string}
     */
    get checkboxId() {
      return this.getAttribute("checkboxId") ?? "";
    }

    /**
     * @param {string} value
     */
    set checkboxId(value) {
      /** @type {HTMLInputElement} */
      const checkbox = this.shadowRoot.querySelector(".foldable__checkbox");
      checkbox.id = value;

      /** @type {HTMLLabelElement} */
      const label = this.shadowRoot.querySelector(".foldable__label");
      label.htmlFor = value;
    }

    /**
     * @returns {string}
     */
    get panelTitle() {
      return this.getAttribute("panelTitle") ?? "";
    }

    /**
     * @param {string} value
     */
    set panelTitle(value) {
      /** @type {HTMLLabelElement} */
      const label = this.shadowRoot.querySelector(".foldable__label");
      label.insertAdjacentText("beforeend", value);
    }

    /**
     * @returns {string}
     */
    get panelContent() {
      return this.getAttribute("panelContent") ?? "";
    }

    /**
     * @param {string} value
     */
    set panelContent(value) {
      /** @type {HTMLParagraphElement} */
      const paragraph = this.shadowRoot.querySelector(".foldable__description");
      paragraph.insertAdjacentText("beforeend", value);
    }

    /**
     * @private
     * @param {string} prop
     */
    #upgradeProperty(prop) {
      if (this.hasOwnProperty(prop)) {
        const value = this[prop];
        delete this[prop];
        this[prop] = value;
      }
    }
  }

  customElements.define("fsj-foldable-panel", FoldablePanel);
};
