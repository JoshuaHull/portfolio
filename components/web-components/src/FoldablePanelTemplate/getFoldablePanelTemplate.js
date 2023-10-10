import foldablePanelContent from "content:html:src/FoldablePanel/foldable-panel";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getFoldablePanelTemplate}
 */
export const getFoldablePanelTemplate = () => {
  return Handlebars.compile(foldablePanelContent);
};
