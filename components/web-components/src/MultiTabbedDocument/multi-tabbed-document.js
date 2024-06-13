import multiTabbedDocumentCompiled from "compile:html:src/MultiTabbedDocument/multi-tabbed-document";
import { headerPartial } from "./mtd_invoke/headerPartial";
import { contentPartial } from "./mtd_invoke/contentPartial";
import { cssRules } from "./mtd_invoke/cssRules";

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
      this.#upgradeProperty("initialCurrentTab");

      const doc = this.#getDocument();
      const tabs = this.#getTabs();

      for (let i = 0; i < this.tabCount; i += 1) {
        const header = headerPartial(i, parseInt(this.initialCurrentTab), `<slot name="tab${i}title"></slot>`);

        tabs.insertAdjacentHTML("beforeend", header);

        const content = contentPartial(`<slot name="tab${i}content"></slot>`);

        doc.insertAdjacentHTML("beforeend", content);
      }

      const rules = cssRules(parseInt(this.tabCount), this.variant);
      this.shadowRoot.innerHTML += `<style>${rules}</style>`;
    }

    /**
     * @returns {string}
     */
    get tabCount() {
      return this.getAttribute("tabCount") ?? "0";
    }

    /**
     * @param {number} value
     */
    set tabCount(value) {
      this.setAttribute("tabCount", value);
    }

    /**
     * @returns {string}
     */
    get initialCurrentTab() {
      return this.getAttribute("initialCurrentTab") ?? "0";
    }

    /**
     * @param {string} value
     */
    set initialCurrentTab(value) {
      this.setAttribute("initialCurrentTab", value);
    }

    /**
     * @returns {string}
     */
    get variant() {
      return this.getAttribute("variant") ?? "default";
    }

    /**
     * @param {string} value
     */
    set variant(value) {
      return this.setAttribute("variant", value);
    }

    /**
     * @returns {HTMLElement}
     */
    #getTabs() {
      return this.shadowRoot.querySelector(".multi-tabbed-document-tabs");
    }

    /**
     * @returns {HTMLElement}
     */
    #getDocument() {
      return this.shadowRoot.querySelector(".multi-tabbed-document");
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
