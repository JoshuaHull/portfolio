import multiTabbedDocumentCompiled from "compile:html:src/MultiTabbedDocument/multi-tabbed-document";
import selectedTabbedDocumentSelector from "compile:css:src/MultiTabbedDocument/partials/selected-tabbed-document-selector";
import tabbedDocumentHeader from "compile:html:src/MultiTabbedDocument/partials/tabbed-document-header";
import tabbedDocument from "compile:html:src/MultiTabbedDocument/partials/tabbed-document";

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

      const parser = new DOMParser();

      const tabs = this.#getTabs();

      for (let i = 0; i < this.tabCount; i += 1) {
        const indexedHeader = tabbedDocumentHeader.replaceAll("tab0radio", `tab${i}radio`);
        const parsed = parser.parseFromString(indexedHeader, "text/html");
        const header = parsed.body.querySelector(".tabbed-document-header");

        this.#addSlotTo(header, `tab${i}title`);
        tabs.append(...parsed.body.children);
      }

      const doc = this.#getDocument();

      for (let i = 0; i < this.tabCount; i += 1) {
        const parsed = parser.parseFromString(tabbedDocument, "text/html");
        const content = parsed.body.querySelector(".tabbed-document-content");

        this.#addSlotTo(content, `tab${i}content`);
        doc.append(...parsed.body.children);
      }

      for (let i = 0; i < this.tabCount; i += 1) {
        const selectingCorrectArticle = selectedTabbedDocumentSelector.replace("plusOne", `${i + 1}`);
        const selectingCorrectRadio = selectingCorrectArticle.replace("twoNPlusOne", 2*i + 1);

        this.shadowRoot.innerHTML += `<style>${selectingCorrectRadio}</style>`;
      }

      this.#selectTab(this.initialCurrentTab);
    }

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

    #getTabs() {
      return this.shadowRoot.querySelector(".multi-tabbed-document-tabs");
    }

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
