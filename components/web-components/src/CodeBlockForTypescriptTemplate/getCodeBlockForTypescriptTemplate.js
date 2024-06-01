import codeBlockForTypescriptContent from "content:html:src/CodeBlockForTypescript/code-block-for-typescript";
import Handlebars from "handlebars";
import { registerHandlebarsHelpers } from "../registerHandlebarsHelpers";

/**
 * @type {import("./index").getCodeBlockForTypescriptTemplate}
 */
export const getCodeBlockForTypescriptTemplate = () => {
  registerHandlebarsHelpers(Handlebars);
  return Handlebars.compile(codeBlockForTypescriptContent);
};
