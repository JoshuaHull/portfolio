import codeBlockForVueContent from "content:html:src/CodeBlockForVue/code-block-for-vue";
import Handlebars from "handlebars";
import { registerLineNumbersHelper, registerVueHelper } from "../_handlebars-helpers/index.js";

/**
 * @type {import("./index").getCodeBlockForVueTemplate}
 */
export const getCodeBlockForVueTemplate = () => {
  registerLineNumbersHelper(Handlebars);
  registerVueHelper(Handlebars);
  return Handlebars.compile(codeBlockForVueContent);
};
