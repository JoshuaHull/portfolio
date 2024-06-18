import actionButtonCompiled from "compile:html:src/ActionButton/action-button";

/**
 * @type {import("./index").registerActionButton}
 */
export const registerActionButton = () => {
  const template = document.createElement("template");

  template.innerHTML = actionButtonCompiled;

  attachActionButtonTo(template);
};

/**
 * @type {import("./index").attachActionButtonTo}
 */
export const attachActionButtonTo = (element) => {
  class ActionButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("disabled");
    }

    /**
     * @returns {string}
     */
    get disabled() {
      return this.getAttribute("disabled") ?? "";
    }

    /**
     * @param {string} value
     */
    set disabled(value) {
      /** @type {HTMLInputElement} */
      const button = this.shadowRoot.querySelector(".action-button");

      if (!value)
        button.classList.remove("disabled");
      else
        button.classList.add("disabled");
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
    customElements.define("fsj-action-button", ActionButton);
  } catch {}
};
