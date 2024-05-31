import Handlebars from "handlebars";
import { IconContainerProps } from "./../IconContainer/index";

export function getIconContainerTemplate(): Handlebars.TemplateDelegate<IconContainerProps & { icon: string }>;
