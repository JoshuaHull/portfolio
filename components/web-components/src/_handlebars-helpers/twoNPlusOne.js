/**
 * @param {typeof Handlebars} handlebars
 */
export const registerTwoNPlusOneHelper = (handlebars) => {
  handlebars.registerHelper("twoNPlusOne",
    /**
    * @param {number | undefined} n
    */
    n => n == null ? 1 : 2 * n + 1
  );
};
