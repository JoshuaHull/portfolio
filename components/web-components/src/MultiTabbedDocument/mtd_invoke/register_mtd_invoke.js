import { headerPartial } from "./headerPartial.js";
import { contentPartial } from "./contentPartial.js";
import { cssRules } from "./cssRules.js";

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
        case "headerPartial": {
          assertLength(args, 4);
          const index = assertNumber(args[0]);
          const initialCurrentTab = assertNumber(args[1]);
          const slot = assertString(args[2]);
          return headerPartial(index, initialCurrentTab, slot);
        }
        case "contentPartial": {
          assertLength(args, 2);
          const slot = assertString(args[0]);
          return contentPartial(slot);
        }
        case "cssRules": {
          assertLength(args, 3);
          const tabCount = assertNumber(args[0] ?? 0);
          const variant = assertString(args[1] ?? "default");
          return cssRules(tabCount, variant);
        }
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
