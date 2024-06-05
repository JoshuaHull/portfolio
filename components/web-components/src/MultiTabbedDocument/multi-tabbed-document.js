import multiTabbedDocumentCompiled from "compile:html:src/MultiTabbedDocument/multi-tabbed-document";

/**
 * @type {import("./index").registerMultiTabbedDocument}
 */
export const registerMultiTabbedDocument = () => {
  const template = document.createElement("template");

  template.innerHTML = multiTabbedDocumentCompiled;

  attachMultiTabbedDocumentTo(template);
};

/**
 * @type {import("./index").attachMultiTabbedDocumentTo}
 */
export const attachMultiTabbedDocumentTo = (element) => {
  class MultiTabbedDocument extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("tabCount");
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

  try {
    customElements.define("fsj-multi-tabbed-document", MultiTabbedDocument);
  } catch {}
}
