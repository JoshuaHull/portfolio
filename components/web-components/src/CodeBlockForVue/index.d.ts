export function registerCodeBlockForVue(): void;
export function attachCodeBlockForVueTo(element: HTMLTemplateElement): void;
export type CodeBlockForVueProps = {
  content: string;
  hideLineNumbers: boolean;
};
