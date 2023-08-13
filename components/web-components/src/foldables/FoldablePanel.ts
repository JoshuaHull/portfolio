import { defineCustomElement } from "vue";
import FoldablePanel from "./FoldablePanel.ce.vue";

const customElement = defineCustomElement(FoldablePanel)

export const registerFoldablePanel = () => {
  customElements.define("fsj-foldable-panel", customElement);
};
