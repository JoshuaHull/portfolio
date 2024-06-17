import Handlebars from "handlebars";
import { ActionButtonProps } from "./../ActionButton/index";

export function getActionButtonTemplate(): Handlebars.TemplateDelegate<ActionButtonProps & {
  content: string;
}>;
