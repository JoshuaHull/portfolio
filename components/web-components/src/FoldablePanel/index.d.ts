import Handlebars from "handlebars";

export declare const registerFoldablePanel: () => void;
export declare const getFoldablePanelHtml: () => string;
export declare const getFoldablePanelHtmlTemplate: () => Handlebars.TemplateDelegate<FoldablePanelProps>;
export declare const attachFoldablePanelTo: (element: HTMLTemplateElement) => void;
export declare type FoldablePanelProps = {
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
  defaultChecked: boolean;
};
