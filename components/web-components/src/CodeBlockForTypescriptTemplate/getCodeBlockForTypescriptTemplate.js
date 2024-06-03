import codeBlockForTypescriptContent from "content:html:src/CodeBlockForTypescript/code-block-for-typescript";
import Handlebars from "handlebars";
import { registerLineNumbersHelper, registerTypescriptHelper } from "../_handlebars-helpers/index.js";

/**
 * @type {import("./index").getCodeBlockForTypescriptTemplate}
 */
export const getCodeBlockForTypescriptTemplate = () => {
  registerTypescriptHelper(Handlebars);
  registerLineNumbersHelper(Handlebars);
  return Handlebars.compile(codeBlockForTypescriptContent);
};
