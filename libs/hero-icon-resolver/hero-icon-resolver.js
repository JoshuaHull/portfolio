/**
 * @constant
 * @type {Object.<string, string>}
 */
const importMap = {
  "OutlineIcon": "@heroicons/vue/24/outline",
  "IconOutline": "@heroicons/vue/24/outline",
  "SolidIcon": "@heroicons/vue/24/solid",
  "IconSolid": "@heroicons/vue/24/solid",
  "OutlineMiniIcon": "@heroicons/vue/20/outline",
  "IconMiniOutline": "@heroicons/vue/20/outline",
  "SolidMiniIcon": "@heroicons/vue/20/solid",
  "IconMiniSolid": "@heroicons/vue/20/solid",
};

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

  for (let suffix in importMap) {
    const from = importMap[suffix];
    const name = `${pascalComponentName.slice(0, pascalComponentName.length - suffix.length)}Icon`;

    if (pascalComponentName.endsWith(suffix))
      return {
        name,
        from,
      };
  }
};
