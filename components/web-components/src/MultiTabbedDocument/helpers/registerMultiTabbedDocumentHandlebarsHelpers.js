import { registerMultiTabbedDocumentArticleSelectorsHelper } from "./multiTabbedDocumentArticleSelector.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerMultiTabbedDocumentHandlebarsHelpers = (handlebars) => {
  registerMultiTabbedDocumentArticleSelectorsHelper(handlebars);
};
