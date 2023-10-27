import codeBlockForCSharpCompiled from "compile:html:src/CodeBlockForCSharp/code-block-for-csharp";
import { CSharpLexer } from "csharp-lexer";
import { HighlighterHtml } from "highlighter-html";
import { CSharpTokenMap } from "./csharp-token-map";

/**
 * @type {import("./index").registerCodeBlockForCSharp}
 */
export const registerCodeBlockForCSharp = () => {
  const template = document.createElement("template");

  template.innerHTML = codeBlockForCSharpCompiled;

  attachCodeBlockForCSharpTo(template);
};

/**
 * @type {import("./index").attachCodeBlockForCSharpTo}
 */
export const attachCodeBlockForCSharpTo = (element) => {
  class CodeBlockForCSharp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("content");
      this.#upgradeProperty("hideLineNumbers");
    }

    /**
     * @returns {boolean}
     */
    get hideLineNumbers() {
      return this.getAttribute("hideLineNumbers") ?? "";
    }

    /**
     * @param {boolean} value
     */
    set hideLineNumbers(value) {
      /** @type {HTMLDivElement} */
      const container = this.shadowRoot.querySelector(".code-block-container");

      if (value)
        container.classList.add("hide-line-numbers");
      else
        container.classList.remove("hide-line-numbers");
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
      const lexer = new CSharpLexer(value);
      const tokenMap = new CSharpTokenMap();
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
        const padding = " ".repeat(`${lines.length}`.length - `${i + 1}`.length);
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
    customElements.define("fsj-code-block-for-csharp", CodeBlockForCSharp);
  } catch {}
};
