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
      const codeBlock = this.shadowRoot.querySelector(".code-block");
      codeBlock.innerHTML = html;

      this.#updateLineNumbers(value);
    }

    /**
     * @param {string} content
     */
    #updateLineNumbers(content) {
      /** @type {HTMLPreElement} */
      const lineNumbers = this.shadowRoot.querySelector(".line-numbers");
      const lines = content.split("\n");

      let rtn = "";

      for (let i = 0; i < lines.length; i += 1) {
        const padding = ' '.repeat(`${lines.length}`.length - `${i + 1}`.length);
        rtn += `${padding}${i + 1}\n`;
      }

      lineNumbers.innerText = rtn;
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
