export function registerMultiTabbedDocument(): void;
export function attachMultiTabbedDocumentTo(element: HTMLTemplateElement): void;
export type MultiTabbedDocumentProps = {
  tabCount: number;
  currentTab: number;
};
