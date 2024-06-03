/**
 * @type {import("./index.d.ts").registerLineNumbersHelper}
 * @param {typeof Handlebars} handlebars
 */
export const registerLineNumbersHelper = (handlebars) => {
  handlebars.registerHelper("lineNumbers",
    /**
     * @param {string} content
     * @returns {string}
     */
    (content) => {
      const lines = content?.split("\n") ?? "";

      let rtn = "";

      for (let i = 0; i < lines.length; i += 1) {
        const padding = " ".repeat(`${lines.length}`.length - `${i + 1}`.length);
        rtn += `${padding}${i + 1}\n`;
      }

      return rtn;
    }
  );
};
