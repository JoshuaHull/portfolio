import Handlebars from "handlebars";

export function registerFoldablePanel(): void;
export function getFoldablePanelHtmlTemplate(): Handlebars.TemplateDelegate<FoldablePanelProps>;
export function attachFoldablePanelTo(element: HTMLTemplateElement): void;
export type FoldablePanelProps = {
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
  defaultChecked: boolean;
};
