/**
 * @param {number} tab
 */
export function multiTabbedDocumentArticleSelector(tab) {
  return `
    .multi-tabbed-document:has(
      .multi-tabbed-document-tabs > .tabbed-document-radio:nth-child(
        ${2*tab + 1}
      ):checked
    ) > .tabbed-document:nth-of-type(
      ${tab + 1}
    ) {
      z-index: 1;
      opacity: 100%;
    }
  `;
}

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerMultiTabbedDocumentArticleSelectorHelper = (handlebars) => {
  handlebars.registerHelper("multiTabbedDocumentArticleSelector",
    /**
    * @param {number | string | undefined} tab
    */
    tab => {
      const notNull = tab || 0;
      const parsed = typeof notNull === "string" ? parseInt(notNull) : notNull;
      return multiTabbedDocumentArticleSelector(parsed);
    }
  );
};
