export function registerFoldableTextArea(): void;
export function attachFoldableTextAreaTo(element: HTMLTemplateElement): void;
export type FoldableTextAreaProps = {
  checkboxId: string;
  checkboxName: string;
  defaultChecked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaName: string;
  textAreaMaxLength: number;
  textAreaValue: string;
};
