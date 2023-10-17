import codeBlockForTypescriptCompiled from "compile:html:src/CodeBlockForTypescript/code-block-for-typescript";
import { TypescriptLexer } from "typescript-lexer";
import { HighlighterHtml } from "highlighter-html";
import { TypescriptTokenMap } from "./typescript-token-map";

/**
 * @type {import("./index").registerCodeBlockForTypescript}
 */
export const registerCodeBlockForTypescript = () => {
  const template = document.createElement("template");

  template.innerHTML = codeBlockForTypescriptCompiled;

  attachCodeBlockForTypescriptTo(template);
};

/**
 * @type {import("./index").attachCodeBlockForTypescriptTo}
 */
export const attachCodeBlockForTypescriptTo = (element) => {
  class CodeBlockForTypescript extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("content");
    }

    /**
     * @returns {string}
     */
    get content() {
      return this.getAttribute("content") ?? "";
    }

    /**
     * @param {string} value
     */
    set content(value) {
      const lexer = new TypescriptLexer(value);
      const tokenMap = new TypescriptTokenMap();
      const highlighter = new HighlighterHtml(lexer, tokenMap);
      const html = highlighter.toHtml();

      /** @type {HTMLPreElement} */
      const codeBlock = this.shadowRoot.querySelector(".codeBlock");
      codeBlock.innerHTML = html;
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
    customElements.define("fsj-code-block-for-typescript", CodeBlockForTypescript);
  } catch {}
};
