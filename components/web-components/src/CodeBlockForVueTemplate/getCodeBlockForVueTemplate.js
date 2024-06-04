import codeBlockForVueContent from "content:html:src/CodeBlockForVue/code-block-for-vue";
import Handlebars from "handlebars";
import { registerLineNumbersHelper } from "../_handlebars-helpers/lineNumbers.js";
import { registerVueHelper } from "../_handlebars-helpers/vue.js";

/**
 * @type {import("./index").getCodeBlockForVueTemplate}
 */
export const getCodeBlockForVueTemplate = () => {
  registerLineNumbersHelper(Handlebars);
  registerVueHelper(Handlebars);
  return Handlebars.compile(codeBlockForVueContent);
};
