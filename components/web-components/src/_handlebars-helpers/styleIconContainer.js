/**
 * @type {import("./index.d.ts").registerStyleIconContainerHelper}
 */
export const registerStyleIconContainerHelper = (handlebars) => {
  handlebars.registerHelper("styleIconContainer", (height, width, color) => {
    let style = `style="`;
    if (!!height) style += `--icon-container-height: ${height}; `;
    if (!!width) style += `--icon-container-width: ${width}; `;
    if (!!color) style += `--icon-container-color: ${color}; `;
    style += `"`;
    return style;
  });
};
