export function registerFoldablePanel(): void;
export function attachFoldablePanelTo(element: HTMLTemplateElement): void;
export type FoldablePanelProps = {
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
  defaultChecked: boolean;
};
