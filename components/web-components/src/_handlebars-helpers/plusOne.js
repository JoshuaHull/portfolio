/**
 * @param {typeof Handlebars} handlebars
 */
export const registerPlusOneHelper = (handlebars) => {
  handlebars.registerHelper("plusOne",
    /**
    * @param {number | undefined} n
    */
    n => n == null ? 1 : n + 1
  );
};
