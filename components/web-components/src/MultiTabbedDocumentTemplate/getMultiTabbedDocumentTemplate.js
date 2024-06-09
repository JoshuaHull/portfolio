import multiTabbedDocumentContent from "content:html:src/MultiTabbedDocument/multi-tabbed-document";
import selectedTabbedDocumentSelector from "content:css:src/MultiTabbedDocument/partials/selected-tabbed-document-selector";
import tabbedDocumentHeader from "content:html:src/MultiTabbedDocument/partials/tabbed-document-header";
import tabbedDocument from "content:html:src/MultiTabbedDocument/partials/tabbed-document";
import Handlebars from "handlebars";
import { registerEqualHelper } from "../_handlebars-helpers/equal.js";
import { registerForHelper } from "../_handlebars-helpers/for.js";
import { registerPlusOneHelper } from "../_handlebars-helpers/plusOne.js";
import { registerTwoNPlusOneHelper } from "../_handlebars-helpers/twoNPlusOne.js";

/**
 * @type {import("./index").getMultiTabbedDocumentTemplate}
 */
export const getMultiTabbedDocumentTemplate = () => {
  registerEqualHelper(Handlebars);
  registerForHelper(Handlebars);
  registerPlusOneHelper(Handlebars);
  registerTwoNPlusOneHelper(Handlebars);
  Handlebars.registerPartial("selectedTabbedDocumentSelector", selectedTabbedDocumentSelector);
  Handlebars.registerPartial("tabbedDocumentHeader", tabbedDocumentHeader);
  Handlebars.registerPartial("tabbedDocument", tabbedDocument);
  return Handlebars.compile(multiTabbedDocumentContent);
};
