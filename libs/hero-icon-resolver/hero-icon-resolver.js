/**
 * @constant
 * @type {Object.<string, string>}
 */
const importMap = {
  "OutlineMini": "@heroicons/vue/20/outline",
  "MiniOutline": "@heroicons/vue/20/outline",
  "SolidMini": "@heroicons/vue/20/solid",
  "MiniSolid": "@heroicons/vue/20/solid",
  "Outline": "@heroicons/vue/24/outline",
  "Solid": "@heroicons/vue/24/solid",
};

/**
 * @type {string}
 */
const heroPrefix = "Hero";

/**
 * @param {string} str
 * @returns {string}
 */
const unkebabify = (str) => str.replace(/-/, "").toUpperCase();

/**
 * @param {string} str
 * @returns {string}
 */
const toPascal = (str) => str.replace(/(^\w|-\w)/g, unkebabify);

/**
 * @typedef {Object} ComponentResolveResult
 * @property {string} name - resolved name of the component
 * @property {string} from - the path to import the component from
 */

/**
 * Tries to resolve a given component name to the correct Hero icon
 * Returns `undefined` if the component name does not refer to a Hero icon.
 *
 * @param {string} componentName - the name of the component as it would appear in the
 * template of a Vue component
 * @returns {ComponentResolveResult | undefined}
 */
export function heroIconResolver(componentName) {
  const pascalComponentName = toPascal(componentName);

  if (!pascalComponentName.startsWith(heroPrefix))
    return;

  const name = pascalComponentName.slice(heroPrefix.length);

  for (let qualifier in importMap) {
    const from = importMap[qualifier];

    if (name.endsWith(qualifier)) {
      const heroIconName = `${name.slice(0, name.length - qualifier.length)}Icon`;

      return {
        name: heroIconName,
        from,
      };
    }

    if (name.startsWith(qualifier)) {
      const heroIconName = `${name.slice(qualifier.length)}Icon`;

      return {
        name: heroIconName,
        from,
      };
    }
  }
};
