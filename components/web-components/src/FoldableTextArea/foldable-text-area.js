import foldableTextAreaCompiled from "compile:html:src/FoldableTextArea/foldable-text-area";

/**
 * @type {import("./index").registerFoldableTextArea}
 */
export const registerFoldableTextArea = () => {
  const template = document.createElement("template");

  template.innerHTML = foldableTextAreaCompiled;

  attachFoldableTextAreaTo(template);
};

/**
 * @type {import("./index").attachFoldableTextAreaTo}
 */
export const attachFoldableTextAreaTo = (element) => {
  class FoldableTextArea extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("checkboxName");
      this.#upgradeProperty("defaultChecked");
      this.#upgradeProperty("panelTitle");
      this.#upgradeProperty("disabled");
      this.#upgradeProperty("textAreaPlaceholder");
      this.#upgradeProperty("textAreaName");
      this.#upgradeProperty("textAreaValue");
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
    get checkboxName() {
      return this.getAttribute("checkboxName") ?? "";
    }

    /**
     * @param {string} value - name of the checkbox, useful for form submissions
     */
    set checkboxName(value) {
      /** @type {HTMLInputElement} */
      const checkbox = this.shadowRoot.querySelector(".foldable__checkbox");
      checkbox.name = value;
    }

    /**
     * @returns {boolean}
     */
    get defaultChecked() {
      return this.getAttribute("defaultChecked") ?? "";
    }

    /**
     * @param {string} value - whether the panel should be unfolded (true) or folded (false) by default
     */
    set defaultChecked(value) {
      /** @type {HTMLInputElement} */
      const checkbox = this.shadowRoot.querySelector(".foldable__checkbox");
      checkbox.checked = value;
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
      label.innerHTML = value;
    }

    /**
     * @returns {boolean}
     */
    get disabled() {
      return this.getAttribute("disabled") ?? "";
    }

    /**
     * @param {string} value
     */
    set disabled(value) {
      /** @type {HTMLInputElement} */
      const checkbox = this.shadowRoot.querySelector(".foldable__checkbox");
      checkbox.disabled = value;
    }

    /**
     * @returns {string}
     */
    get textAreaPlaceholder() {
      return this.getAttribute("textAreaPlaceholder") ?? "";
    }

    /**
     * @param {string} value
     */
    set textAreaPlaceholder(value) {
      /** @type {HTMLTextAreaElement} */
      const textArea = this.shadowRoot.querySelector(".foldable__textarea");
      textArea.placeholder = value;
    }

    /**
     * @returns {string}
     */
    get textAreaName() {
      return this.getAttribute("textAreaName") ?? "";
    }

    /**
     * @param {string} value
     */
    set textAreaName(value) {
      /** @type {HTMLTextAreaElement} */
      const textArea = this.shadowRoot.querySelector(".foldable__textarea");
      textArea.name = value;
    }

    /**
     * @returns {string}
     */
    get textAreaValue() {
      return this.getAttribute("textAreaValue") ?? "";
    }

    /**
     * @param {string} value
     */
    set textAreaValue(value) {
      /** @type {HTMLTextAreaElement} */
      const textArea = this.shadowRoot.querySelector(".foldable__textarea");
      textArea.value = value;
    }

    /**
     * @returns {number}
     */
    get textAreaMaxLength() {
      return this.getAttribute("textAreaMaxLength") ?? "";
    }

    /**
     * @param {number} value
     */
    set textAreaMaxLength(value) {
      /** @type {HTMLTextAreaElement} */
      const textArea = this.shadowRoot.querySelector(".foldable__textarea");
      textArea.maxLength = value;
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
    customElements.define("fsj-foldable-textarea", FoldableTextArea);
  } catch {}
};
