import codeBlockForCSharpContent from "content:html:src/CodeBlockForCSharp/code-block-for-csharp";
import Handlebars from "handlebars";
import { registerLineNumbersHelper, registerCSharpHelper } from "../_handlebars-helpers/index.js";

/**
 * @type {import("./index").getCodeBlockForCSharpTemplate}
 */
export const getCodeBlockForCSharpTemplate = () => {
  registerCSharpHelper(Handlebars);
  registerLineNumbersHelper(Handlebars);
  return Handlebars.compile(codeBlockForCSharpContent);
};
