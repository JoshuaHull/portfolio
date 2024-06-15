import iconContainerContent from "content:html:src/IconContainer/icon-container";
import Handlebars from "handlebars";
import { register_ic_invoke } from "./../IconContainer/ic_invoke/register_ic_invoke.js";

/**
 * @type {import("./index").getIconContainerTemplate}
 */
export const getIconContainerTemplate = () => {
  register_ic_invoke(Handlebars);
  return Handlebars.compile(iconContainerContent);
};
