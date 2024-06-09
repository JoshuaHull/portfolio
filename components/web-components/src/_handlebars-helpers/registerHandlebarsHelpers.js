import { registerCSharpHelper } from "./csharp.js";
import { registerTypescriptHelper } from "./typescript.js";
import { registerVueHelper } from "./vue.js";
import { registerLineNumbersHelper } from "./lineNumbers.js";
import { registerStyleIconContainerHelper } from "./styleIconContainer.js";
import { registerEqualHelper } from "./equal.js";
import { registerForHelper } from "./for.js";
import { registerMultiTabbedDocumentHandlebarsHelpers } from "./../MultiTabbedDocument/helpers/registerMultiTabbedDocumentHandlebarsHelpers.js";

/**
 * @type {import("./index.d.ts").registerHandlebarsHelpers}
 * @param {typeof Handlebars} handlebars
 */
export const registerHandlebarsHelpers = (handlebars) => {
  registerStyleIconContainerHelper(handlebars);
  registerCSharpHelper(handlebars);
  registerTypescriptHelper(handlebars);
  registerVueHelper(handlebars);
  registerLineNumbersHelper(handlebars);
  registerEqualHelper(handlebars);
  registerForHelper(handlebars);
  registerMultiTabbedDocumentHandlebarsHelpers(handlebars);
};
