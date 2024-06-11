import { registerMultiTabbedDocumentArticleSelectorsHelper } from "./multiTabbedDocumentArticleSelector.js";
import { register_mtd_invoke } from "./mtd_invoke.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerMultiTabbedDocumentHandlebarsHelpers = (handlebars) => {
  registerMultiTabbedDocumentArticleSelectorsHelper(handlebars);
  register_mtd_invoke(handlebars);
};
