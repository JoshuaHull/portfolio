import { registerMultiTabbedDocumentArticleSelectorHelper } from "./multiTabbedDocumentArticleSelector.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerMultiTabbedDocumentHandlebarsHelpers = (handlebars) => {
  registerMultiTabbedDocumentArticleSelectorHelper(handlebars);
};
