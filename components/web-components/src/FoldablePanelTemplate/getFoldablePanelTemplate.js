import foldablePanelContent from "content:html:src/FoldablePanel/foldable-panel";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getFoldablePanelHtmlTemplate}
 */
export const getFoldablePanelHtmlTemplate = () => {
  return Handlebars.compile(foldablePanelContent);
};
