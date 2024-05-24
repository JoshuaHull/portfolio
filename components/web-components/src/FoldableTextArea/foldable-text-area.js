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

    // https://web.dev/articles/more-capable-form-controls
    static formAssociated = true;

    /**
     * @type {ElementInternals}
     */
    #internals;

    /**
     * @type {string}
     */
    #checkboxId;

    constructor() {
      super();
      this.#checkboxId = `${Math.random()}`;
      this.#internals = this.attachInternals();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("name");
      this.#upgradeProperty("checked");
      this.#upgradeProperty("panelTitle");
      this.#upgradeProperty("disabled");
      this.#upgradeProperty("textAreaPlaceholder");
      this.#upgradeProperty("textAreaValue");

      /** @type {HTMLInputElement} */
      const checkbox = this.#getCheckbox();
      checkbox.id = this.#checkboxId;

      checkbox.addEventListener("input", (e) => {
        this.checked = checkbox.checked;
      });

      /** @type {HTMLLabelElement} */
      const label = this.#getLabel();
      label.htmlFor = this.#checkboxId;

      /** @type {HTMLTextAreaElement} */
      const textArea = this.#getTextarea();

      textArea.addEventListener("input", (e) => {
        this.textAreaValue = textArea.value;
      });
    }

    get value() {
      const name = this.getAttribute("name");
      const formData = new FormData();
      formData.append(`${name}-checked`, this.checked);
      formData.append(`${name}-text`, this.textAreaValue);
      return formData;
    }

    get form() {
      return this.#internals.form;
    }

    get type() {
      return this.localName;
    }

    get validity() {
      return this.#internals.validity;
    }

    get validationMessage() {
      return this.#internals.validationMessage;
    }

    get willValidate() {
      return this.#internals.willValidate;
    }

    checkValidity() {
      return this.#internals.checkValidity();
    }

    reportValidity() {
      return this.#internals.reportValidity();
    }

    /**
     * @returns {string}
     */
    get checkboxId() {
      return this.#checkboxId;
    }

    /**
     * @returns {boolean}
     */
    get checked() {
      return this.getAttribute("checked") ?? "false";
    }

    /**
     * @param {string} value - whether the panel should be unfolded (true) or folded (false)
     */
    set checked(value) {
      /** @type {HTMLInputElement} */
      const checkbox = this.#getCheckbox();
      checkbox.checked = value;

      this.setAttribute("checked", !!value);
      this.#updateFormValue();
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
      const label = this.#getLabel();
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
      const checkbox = this.#getCheckbox();
      checkbox.disabled = value;

      /** @type {HTMLTextAreaElement} */
      const textArea = this.#getTextarea();
      textArea.disabled = value;
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
      const textArea = this.#getTextarea();
      textArea.placeholder = value;
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
      const textArea = this.#getTextarea();
      textArea.value = value;

      this.setAttribute("textAreaValue", value);
      this.#updateFormValue();
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
      const textArea = this.#getTextarea();
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

    #updateFormValue() {
      this.#internals.setFormValue(this.value);
    }

    #getCheckbox() {
      return this.shadowRoot.querySelector(".foldable__checkbox");
    }

    #getTextarea() {
      return this.shadowRoot.querySelector(".foldable__textarea");
    }

    #getLabel() {
      return this.shadowRoot.querySelector(".foldable__label");
    }
  }

  try {
    customElements.define("fsj-foldable-textarea", FoldableTextArea);
  } catch {}
};
