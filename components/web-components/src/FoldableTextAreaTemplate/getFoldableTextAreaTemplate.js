import foldableTextAreaContent from "content:html:src/FoldableTextArea/foldable-text-area";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getFoldableTextAreaTemplate}
 */
export const getFoldableTextAreaTemplate = () => {
  return Handlebars.compile(foldableTextAreaContent);
};
