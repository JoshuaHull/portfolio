import iconContainerCompiled from "compile:html:src/IconContainer/icon-container";

/**
 * @type {import("./index").registerIconContainer}
 */
export const registerIconContainer = () => {
  const template = document.createElement("template");

  template.innerHTML = iconContainerCompiled;

  attachIconContainerTo(template);
};

/**
 * @type {import("./index").attachIconContainerTo}
 */
export const attachIconContainerTo = (element) => {
  class IconContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(element.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("height");
      this.#upgradeProperty("width");
      this.#upgradeProperty("color");
    }

    get height() {
      return this.getAttribute("height");
    }

    set height(value) {
      this.setAttribute("height", value);

      const iconContainer = this.#getIconContainer();
      iconContainer.style.setProperty("--icon-container-height", value);
    }

    get width() {
      return this.getAttribute("width");
    }

    set width(value) {
      this.setAttribute("width", value);

      const iconContainer = this.#getIconContainer();
      iconContainer.style.setProperty("--icon-container-width", value);
    }

    get color() {
      return this.getAttribute("color");
    }

    set color(value) {
      this.setAttribute("color", value);

      const iconContainer = this.#getIconContainer();
      iconContainer.style.setProperty("--icon-container-color", value);
    }

    /**
      * @return {HTMLElement}
      */
    #getIconContainer() {
      return this.shadowRoot.querySelector(".icon-container");
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
    customElements.define("fsj-icon-container", IconContainer);
  } catch {}
}
