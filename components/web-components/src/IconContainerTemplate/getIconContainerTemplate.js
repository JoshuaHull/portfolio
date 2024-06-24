import iconContainerContent from "content:html:src/IconContainer/icon-container";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getIconContainerTemplate}
 */
export const getIconContainerTemplate = () => {
  return Handlebars.compile(iconContainerContent);
};
