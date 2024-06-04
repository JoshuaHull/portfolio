import codeBlockForTypescriptContent from "content:html:src/CodeBlockForTypescript/code-block-for-typescript";
import Handlebars from "handlebars";
import { registerLineNumbersHelper } from "../_handlebars-helpers/lineNumbers.js";
import { registerTypescriptHelper } from "../_handlebars-helpers/typescript.js";

/**
 * @type {import("./index").getCodeBlockForTypescriptTemplate}
 */
export const getCodeBlockForTypescriptTemplate = () => {
  registerTypescriptHelper(Handlebars);
  registerLineNumbersHelper(Handlebars);
  return Handlebars.compile(codeBlockForTypescriptContent);
};
