import codeBlockForCSharpContent from "content:html:src/CodeBlockForCSharp/code-block-for-csharp";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getCodeBlockForCSharpTemplate}
 */
export const getCodeBlockForCSharpTemplate = () => {
  return Handlebars.compile(codeBlockForCSharpContent);
};
