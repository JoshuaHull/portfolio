/**
 * @param {typeof Handlebars} handlebars
 */
export const registerEqualHelper = (handlebars) => {
  handlebars.registerHelper("equal",
    /**
    * @param {number | string | undefined} first
    * @param {number | string | undefined} second
    * @param {Handlebars.HelperOptions} options
    */
    (first, second, options) => first === second ? options.fn(this) : options.inverse(this)
  );
};
