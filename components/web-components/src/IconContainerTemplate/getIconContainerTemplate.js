import iconContainerContent from "content:html:src/IconContainer/icon-container";
import Handlebars from "handlebars";
import { registerStyleIconContainerHelper } from "../_handlebars-helpers/index.js";

/**
 * @type {import("./index").getIconContainerTemplate}
 */
export const getIconContainerTemplate = () => {
  registerStyleIconContainerHelper(Handlebars);
  return Handlebars.compile(iconContainerContent);
};
