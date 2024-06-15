/**
 * @param {string} width
 * @param {string} height
 * @param {string} colour
 * @returns {string}
*/
export const cssRules = (width, height, colour) => {
  let rule = `.icon-container {\n`;
  if (!!width) rule += `  --icon-container-width: ${width};\n`;
  if (!!height) rule += `  --icon-container-height: ${height};\n`;
  if (!!colour) rule += `  --icon-container-color: ${colour};\n`;
  return rule + "}";
};
