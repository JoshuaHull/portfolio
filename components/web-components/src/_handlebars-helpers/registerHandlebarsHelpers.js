import { registerCSharpHelper } from "./csharp.js";
import { registerTypescriptHelper } from "./typescript.js";
import { registerVueHelper } from "./vue.js";
import { registerLineNumbersHelper } from "./lineNumbers.js";
import { registerStyleIconContainerHelper } from "./styleIconContainer.js";

/**
 * @type {import("./index.d.ts").registerHandlebarsHelpers}
 */
export const registerHandlebarsHelpers = (handlebars) => {
  registerStyleIconContainerHelper(handlebars);
  registerCSharpHelper(handlebars);
  registerTypescriptHelper(handlebars);
  registerVueHelper(handlebars);
  registerLineNumbersHelper(handlebars);
};
