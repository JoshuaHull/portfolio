/**
 * @param {number} tabCount
 * @param {string} variant
 * @returns {string}
*/
export const cssRules = (tabCount, variant) => {
  const articleSelectors = multiTabbedDocumentArticleSelectors(tabCount);

  let variables = `
    .multi-tabbed-document {
      --multi-tabbed-document-cursor: ${tabCount === 1 ? "default" : "pointer"};
  `;

  switch (variant) {
    case "editor":
      variables += `
        --multi-tabbed-document-colour: white;
        --multi-tabbed-document-header-background-colour: #383C4A;
        --multi-tabbed-document-background-colour: #232830;
        --multi-tabbed-document-border-radius: 0;
        --multi-tabbed-document-padding: 0;
        --multi-tabbed-document-height: 100%;
      `;
  }

  variables += "}";

  return `
    ${articleSelectors}
    ${variables}
  `;
};

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
function multiTabbedDocumentArticleSelectors(tabCount) {
  return [...Array(tabCount).keys()]
    .map(tab => multiTabbedDocumentArticleSelector(tab))
    .join("\n\n");
}
