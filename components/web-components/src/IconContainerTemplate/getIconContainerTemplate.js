import iconContainerContent from "content:html:src/IconContainer/icon-container";
import Handlebars from "handlebars";
import { registerHandlebarsHelpers } from "../registerHandlebarsHelpers";

/**
 * @type {import("./index").getIconContainerTemplate}
 */
export const getIconContainerTemplate = () => {
  registerHandlebarsHelpers(Handlebars);
  return Handlebars.compile(iconContainerContent);
};
