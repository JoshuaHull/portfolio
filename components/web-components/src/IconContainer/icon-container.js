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

      this.style.display = "block";
    }

    get height() {
      return this.getAttribute("height");
    }

    set height(value) {
      this.setAttribute("height", value);

      this.style.setProperty("--icon-container-height", value);
      this.style.height = !value ? "auto " : value;
    }

    get width() {
      return this.getAttribute("width");
    }

    set width(value) {
      this.setAttribute("width", value);

      this.style.setProperty("--icon-container-width", value);
      this.style.width = !value ? "auto " : value;
    }

    get color() {
      return this.getAttribute("color");
    }

    set color(value) {
      this.setAttribute("color", value);

      this.style.setProperty("--icon-container-color", value);
      this.style.color = !value ? "auto " : value;
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
