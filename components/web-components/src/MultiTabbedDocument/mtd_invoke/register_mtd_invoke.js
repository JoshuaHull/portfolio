import { headerPartial } from "./headerPartial.js";
import { contentPartial } from "./contentPartial.js";
import { cssRules } from "./cssRules.js";
import { assertLength, assertNumber, assertString } from "./../../_utils/assertions.js";

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
