export const registerFoldablePanel = () => {
  const template = document.createElement("template");

  template.innerHTML = `
<div class="fsj-reset foldable">
  <input
    class="foldable__checkbox"
    type="checkbox"
    defaultChecked="true"
  />
  <label class="foldable__label">
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
  </label>
  <div class="foldable__description__wrapper">
    <p class="foldable__description">
      <slot></slot>
    </p>
  </div>
</div>
<style>
.fsj-reset {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.fsj-reset, .fsj-reset *, *::before, *::after {
  box-sizing: border-box;
}

.fsj-reset, .fsj-reset * {
  margin: 0;
}

.fsj-reset p,
.fsj-reset h1,
.fsj-reset h2,
.fsj-reset h3,
.fsj-reset h4,
.fsj-reset h5,
.fsj-reset h6 {
  overflow-wrap: break-word;
}

.foldable {
  border: 1px var(--color-border) solid;
  border-radius: 0.5rem;
  background-color: var(--color-fg);
}

.foldable__checkbox {
  display: none;
}

.foldable__checkbox:checked ~ .foldable__description__wrapper p {
  max-height: 100px;
}

.foldable__checkbox:not(:checked) ~ .foldable__description__wrapper p {
  max-height: 0px;
}

.foldable__checkbox:not(:checked) ~ label .foldable__chevron__container {
  transform: rotate(-180deg);
}

.foldable__label {
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  padding: 0.5rem;
}

.foldable__chevron__container {
  width: 1.5rem;
  height: 1.5rem;
  transition: all 200ms;
}

.foldable__description__wrapper {
  border-top: 1px var(--color-border) dotted;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.foldable__description {
  transition: all 200ms;
  overflow: hidden;
  height: 100px;
}
</style>
`;

  class FoldablePanel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot!.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      this.#upgradeProperty("checkboxId");
      this.#upgradeProperty("title");
    }

    get checkboxId(): string {
      return this.getAttribute("checkboxId") ?? "";
    }

    set checkboxId(value: string) {
      const checkbox = this.shadowRoot!.querySelector(".foldable__checkbox")!;
      checkbox.id = value;
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__label")!;
      label.htmlFor = value;
    }

    get title(): string {
      return this.getAttribute("title") ?? "";
    }

    set title(value: string) {
      const label: HTMLLabelElement = this.shadowRoot!.querySelector(".foldable__label")!;
      label.insertAdjacentText("beforeend", value);
    }

    #upgradeProperty(prop: string) {
      if (this.hasOwnProperty(prop)) {
        // @ts-expect-error implicit-any
        const value = this[prop];
        // @ts-expect-error implicit-any
        delete this[prop];
        // @ts-expect-error implicit-any
        this[prop] = value;
      }
    }
  }

  customElements.define("fsj-foldable-panel", FoldablePanel);
};