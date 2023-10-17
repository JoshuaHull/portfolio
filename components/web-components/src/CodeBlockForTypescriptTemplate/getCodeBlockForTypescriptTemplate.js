import codeBlockForTypescriptContent from "content:html:src/CodeBlockForTypescript/code-block-for-typescript";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getCodeBlockForTypescriptTemplate}
 */
export const getCodeBlockForTypescriptTemplate = () => {
  return Handlebars.compile(codeBlockForTypescriptContent);
};
