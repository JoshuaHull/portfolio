import { registerCSharpHelper } from "./csharp.js";
import { registerTypescriptHelper } from "./typescript.js";
import { registerVueHelper } from "./vue.js";
import { registerLineNumbersHelper } from "./lineNumbers.js";
import { registerEqualHelper } from "./equal.js";
import { registerForHelper } from "./for.js";
import { register_mtd_invoke } from "./../MultiTabbedDocument/mtd_invoke/register_mtd_invoke.js";

/**
 * @type {import("./index.d.ts").registerHandlebarsHelpers}
 * @param {typeof Handlebars} handlebars
 */
export const registerHandlebarsHelpers = (handlebars) => {
  registerCSharpHelper(handlebars);
  registerTypescriptHelper(handlebars);
  registerVueHelper(handlebars);
  registerLineNumbersHelper(handlebars);
  registerEqualHelper(handlebars);
  registerForHelper(handlebars);
  register_mtd_invoke(handlebars);
};
