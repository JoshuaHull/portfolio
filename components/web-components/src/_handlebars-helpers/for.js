/**
 * @param {typeof Handlebars} handlebars
 */
export const registerForHelper = (handlebars) => {
  handlebars.registerHelper("for",
    /**
    * @param {number | undefined} count
    * @param {Handlebars.HelperOptions} options
    */
    (count, options) => [...Array(count ?? 0).keys()].reduce((acc, i) => acc + options.fn(i), ""));
};
