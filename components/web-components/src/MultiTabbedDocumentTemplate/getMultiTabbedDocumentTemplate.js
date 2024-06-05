import multiTabbedDocumentContent from "content:html:src/MultiTabbedDocument/multi-tabbed-document";
import Handlebars from "handlebars";
import { registerEqualHelper } from "../_handlebars-helpers/equal.js";

/**
 * @type {import("./index").getMultiTabbedDocumentTemplate}
 */
export const getMultiTabbedDocumentTemplate = () => {
  registerEqualHelper(Handlebars);
  return Handlebars.compile(multiTabbedDocumentContent);
};
