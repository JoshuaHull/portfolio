import Handlebars from "handlebars";
import { MultiTabbedDocumentProps } from "./../MultiTabbedDocument/index";

export function getMultiTabbedDocumentTemplate(): Handlebars.TemplateDelegate<
  MultiTabbedDocumentProps & {
    tabTitles: string[];
    tabContents: string[];
  }
>;
