import codeActionButtonContent from "content:html:src/ActionButton/action-button";
import Handlebars from "handlebars";

/**
 * @type {import("./index").getActionButtonTemplate}
 */
export const getActionButtonTemplate = () => {
  return Handlebars.compile(codeActionButtonContent);
};
