import multiTabbedDocumentContent from "content:html:src/MultiTabbedDocument/multi-tabbed-document";
import Handlebars from "handlebars";
import { registerEqualHelper } from "../_handlebars-helpers/equal.js";
import { registerForHelper } from "../_handlebars-helpers/for.js";
import { registerPlusOneHelper } from "../_handlebars-helpers/plusOne.js";

/**
 * @type {import("./index").getMultiTabbedDocumentTemplate}
 */
export const getMultiTabbedDocumentTemplate = () => {
  registerEqualHelper(Handlebars);
  registerForHelper(Handlebars);
  registerPlusOneHelper(Handlebars);
  return Handlebars.compile(multiTabbedDocumentContent);
};
