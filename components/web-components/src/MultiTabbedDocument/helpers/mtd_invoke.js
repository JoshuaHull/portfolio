/**
 * @typedef {import("handlebars").HelperOptions} HelperOptions
 */

/**
 * @param {typeof Handlebars} handlebars
 */
export const register_mtd_invoke = (handlebars) => {
  handlebars.registerHelper("mtd_invoke",
    /**
    * @param {string | undefined} functionName
    * @param {(string | number | undefined | HelperOptions)[]} args
    */
    (functionName, ...args) => {
      switch (functionName) {
        case "headerPartial":
          assertLength(args, 4);
          const index = assertNumber(args[0]);
          const initialCurrentTab = assertNumber(args[1]);
          const slot = assertString(args[2]);
          return headerPartial(index, initialCurrentTab, slot);
      }
    }
  );
};

/**
 * @param {any} value
 * @returns {number}
 */
const assertNumber = (value) => {
  if (typeof value === "string") return parseInt(value);
  if (typeof value === "number") return value;
  throw new Error(`Argument must be a number, received ${value}`);
};

/**
 * @param {any} value
 * @returns {string}
 */
const assertString = (value) => {
  if (typeof value === "string") return value;
  throw new Error(`Argument must be a string, received ${value}`);
};

/**
 * @param {any} value
 * @param {number} length
 * @returns {number}
 */
const assertLength = (value, length) => {
  if (value?.length !== length)
    throw new Error(`Argument must have length ${length}, received length ${value?.length}`);
  return value.length;
};

/**
 * @param {number} index
 * @param {number} initialCurrentTab
 * @param {string} slot
 * @returns {string}
*/
export const headerPartial = (index, initialCurrentTab, slot) => {
  const radioId = `tab${index}radio`;
  const checked = index === initialCurrentTab ? "checked" : "";

  return `
    <input
      class="tabbed-document-radio"
      type="radio"
      name="tabradio"
      id="${radioId}"
      ${checked}
    />
    <label
      class="tabbed-document-header"
      for="${radioId}"
    >
      ${slot}
    </label>
  `;
};
