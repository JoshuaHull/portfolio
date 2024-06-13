import multiTabbedDocumentContent from "content:html:src/MultiTabbedDocument/multi-tabbed-document";
import Handlebars from "handlebars";
import { register_mtd_invoke } from "./../MultiTabbedDocument/mtd_invoke/register_mtd_invoke.js";

/**
 * @type {import("./index").getMultiTabbedDocumentTemplate}
 */
export const getMultiTabbedDocumentTemplate = () => {
  register_mtd_invoke(Handlebars);
  return Handlebars.compile(multiTabbedDocumentContent);
};
