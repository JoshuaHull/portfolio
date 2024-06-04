import codeBlockForCSharpContent from "content:html:src/CodeBlockForCSharp/code-block-for-csharp";
import Handlebars from "handlebars";
import { registerLineNumbersHelper } from "../_handlebars-helpers/lineNumbers.js";
import { registerCSharpHelper } from "../_handlebars-helpers/csharp.js";

/**
 * @type {import("./index").getCodeBlockForCSharpTemplate}
 */
export const getCodeBlockForCSharpTemplate = () => {
  registerCSharpHelper(Handlebars);
  registerLineNumbersHelper(Handlebars);
  return Handlebars.compile(codeBlockForCSharpContent);
};
