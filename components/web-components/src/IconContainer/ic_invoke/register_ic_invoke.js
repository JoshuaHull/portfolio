
import { cssRules } from "./cssRules.js";
import { assertLength, assertString } from "./../../_utils/assertions.js";

/**
 * @typedef {import("handlebars").HelperOptions} HelperOptions
 */

/**
 * @param {typeof Handlebars} handlebars
 */
export const register_ic_invoke = (handlebars) => {
  handlebars.registerHelper("ic_invoke",
    /**
    * @param {string | undefined} functionName
    * @param {(string | number | undefined | HelperOptions)[]} args
    */
    (functionName, ...args) => {
      switch (functionName) {
        case "cssRules": {
          assertLength(args, 4);
          const width = assertString(args[0] ?? "");
          const height = assertString(args[1] ?? "");
          const colour = assertString(args[2] ?? "");
          return cssRules(width, height, colour);
        }
      }
    }
  );
};
