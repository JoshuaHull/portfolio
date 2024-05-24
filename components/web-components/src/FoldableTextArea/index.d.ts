export function registerFoldableTextArea(): void;

export function attachFoldableTextAreaTo(element: HTMLTemplateElement): void;

export type FoldableTextAreaProps = {
  name: string;
  checked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaMaxLength: number;
  textAreaValue: string;
};
