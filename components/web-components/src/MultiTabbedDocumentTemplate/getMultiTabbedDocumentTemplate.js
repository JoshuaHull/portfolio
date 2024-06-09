import multiTabbedDocumentContent from "content:html:src/MultiTabbedDocument/multi-tabbed-document";
import tabbedDocumentHeader from "content:html:src/MultiTabbedDocument/partials/tabbed-document-header";
import tabbedDocument from "content:html:src/MultiTabbedDocument/partials/tabbed-document";
import editorStyles from "content:html:src/MultiTabbedDocument/partials/editor-styles";
import Handlebars from "handlebars";
import { registerEqualHelper } from "../_handlebars-helpers/equal.js";
import { registerForHelper } from "../_handlebars-helpers/for.js";
import { registerMultiTabbedDocumentHandlebarsHelpers } from "./../MultiTabbedDocument/helpers/registerMultiTabbedDocumentHandlebarsHelpers.js";

/**
 * @type {import("./index").getMultiTabbedDocumentTemplate}
 */
export const getMultiTabbedDocumentTemplate = () => {
  registerEqualHelper(Handlebars);
  registerForHelper(Handlebars);
  registerMultiTabbedDocumentHandlebarsHelpers(Handlebars);
  Handlebars.registerPartial("tabbedDocumentHeader", tabbedDocumentHeader);
  Handlebars.registerPartial("tabbedDocument", tabbedDocument);
  Handlebars.registerPartial("editorStyles", editorStyles);
  return Handlebars.compile(multiTabbedDocumentContent);
};
