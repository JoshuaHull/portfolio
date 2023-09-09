import foldablePanelCompiled from "compile:html:src/FoldablePanel/foldable-panel";

/**
 * @type {import("./index").registerFoldablePanel}
 */
export const registerFoldablePanel = () => {
  const template = document.createElement("template");

  template.innerHTML = foldablePanelCompiled;

  attachFoldablePanelTo(template);
};

/**
 * @type {import("./index").attachFoldablePanelTo}
 */
export const attachFoldablePanelTo = (element) => {
  class FoldablePanel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("defaultChecked");
      this.#upgradeProperty("panelTitle");
      this.#upgradeProperty("panelContent");
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
      const icon = `
        <div class="foldable__chevron__container">
          <!-- Hero Icons' chevron-down icon, MIT, https://heroicons.com/ -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      `;
      label.innerHTML = `${icon}${value}`;
    }

    /**
     * @returns {string}
     */
    get panelContent() {
      return this.getAttribute("panelContent") ?? "";
    }

    /**
     * @param {string} value
     */
    set panelContent(value) {
      /** @type {HTMLParagraphElement} */
      const paragraph = this.shadowRoot.querySelector(".foldable__description");
      paragraph.innerHTML = value;
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
    customElements.define("fsj-foldable-panel", FoldablePanel);
  } catch {}
};
