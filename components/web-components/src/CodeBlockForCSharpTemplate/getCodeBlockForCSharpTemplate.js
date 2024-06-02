import codeBlockForCSharpContent from "content:html:src/CodeBlockForCSharp/code-block-for-csharp";
import Handlebars from "handlebars";
import { registerHandlebarsHelpers } from "../_handlebars-helpers/registerHandlebarsHelpers";

/**
 * @type {import("./index").getCodeBlockForCSharpTemplate}
 */
export const getCodeBlockForCSharpTemplate = () => {
  registerHandlebarsHelpers(Handlebars);
  return Handlebars.compile(codeBlockForCSharpContent);
};
