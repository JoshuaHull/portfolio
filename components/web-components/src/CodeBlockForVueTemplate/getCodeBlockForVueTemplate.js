import codeBlockForVueContent from "content:html:src/CodeBlockForVue/code-block-for-vue";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getCodeBlockForVueTemplate}
 */
export const getCodeBlockForVueTemplate = () => {
  return Handlebars.compile(codeBlockForVueContent);
};
