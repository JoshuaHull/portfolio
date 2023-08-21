import Handlebars from "handlebars";

export declare const registerFoldablePanel: () => void;
export declare const getFoldablePanelHtml: () => string;
export declare const getFoldablePanelHtmlTemplate: () => Handlebars.TemplateDelegate<{
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
}>;
export declare const attachFoldablePanelTo: (element: HTMLTemplateElement) => void;
