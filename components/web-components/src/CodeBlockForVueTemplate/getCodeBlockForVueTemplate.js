import codeBlockForVueContent from "content:html:src/CodeBlockForVue/code-block-for-vue";
import Handlebars from "handlebars";
import { registerHandlebarsHelpers } from "../_handlebars-helpers/registerHandlebarsHelpers";

/**
 * @type {import("./index").getCodeBlockForVueTemplate}
 */
export const getCodeBlockForVueTemplate = () => {
  registerHandlebarsHelpers(Handlebars);
  return Handlebars.compile(codeBlockForVueContent);
};
