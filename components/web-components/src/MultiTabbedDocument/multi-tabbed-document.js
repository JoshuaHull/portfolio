import multiTabbedDocumentCompiled from "compile:html:src/MultiTabbedDocument/multi-tabbed-document";
import editorStyles from "content:html:src/MultiTabbedDocument/partials/editor-styles";
import { multiTabbedDocumentArticleSelectors } from "./helpers/multiTabbedDocumentArticleSelector";
import { headerPartial } from "./helpers/headerPartial";
import { contentPartial } from "./helpers/contentPartial";

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

      this.shadowRoot.innerHTML += `<style>${
        multiTabbedDocumentArticleSelectors(parseInt(this.tabCount))
      }</style>`;

      if (this.variant === "editor")
        this.shadowRoot.styleSheets[0].insertRule(`.multi-tabbed-document { ${editorStyles} }`);

      this.#selectTab(this.initialCurrentTab);
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
     * @param {string | number} index
     */
    #selectTab(index) {
      const radios = this.shadowRoot.querySelectorAll(".tabbed-document-radio");

      radios.forEach((radio, i) =>
        i == index
          ? radio.setAttribute("checked", true)
          : radio.removeAttribute("checked")
      );
    }

    /**
     * @param {HTMLElement} element 
     * @param {string} name 
     */
    #addSlotTo(element, name) {
      const slot = document.createElement("slot");
      slot.setAttribute("name", name);
      element.appendChild(slot);
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
