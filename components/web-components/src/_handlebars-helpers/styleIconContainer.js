/**
 * @param {typeof Handlebars} handlebars
 */
export const registerStyleIconContainerHelper = (handlebars) => {
  handlebars.registerHelper("styleIconContainer",
    /**
     * @param {string} height
     * @param {string} width
     * @param {string} color
     * @returns {string}
     */
    (height, width, color) => {
      let style = `style="`;
      if (!!height) style += `--icon-container-height: ${height}; `;
      if (!!width) style += `--icon-container-width: ${width}; `;
      if (!!color) style += `--icon-container-color: ${color}; `;
      style += `"`;
      return style;
    }
  );
};
