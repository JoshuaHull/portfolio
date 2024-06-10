/**
 * @param {number} tab
 */
function multiTabbedDocumentArticleSelector(tab) {
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
 * @param {number} tabCount
 */
export function multiTabbedDocumentArticleSelectors(tabCount) {
  return [...Array(tabCount).keys()]
    .map(tab => multiTabbedDocumentArticleSelector(tab))
    .join("");
}

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerMultiTabbedDocumentArticleSelectorsHelper = (handlebars) => {
  handlebars.registerHelper("multiTabbedDocumentArticleSelectors",
    /**
    * @param {number | string | undefined} tabCount
    */
    tabCount => {
      const notNull = tabCount || 0;
      const parsed = typeof notNull === "string" ? parseInt(notNull) : notNull;
      return multiTabbedDocumentArticleSelectors(parsed);
    }
  );
};
