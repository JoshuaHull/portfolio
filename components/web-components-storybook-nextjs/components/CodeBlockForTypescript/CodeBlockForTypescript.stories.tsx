import { Meta } from "@storybook/react";
import { CodeBlockForTypescriptClientOnly } from "../../web-components-wrapper-nextjs/CodeBlockForTypescriptClientOnly";
import { CodeBlockForTypescriptProps } from "@fullstackjosh/web-components/CodeBlockForTypescript";

const meta: Meta<typeof CodeBlockForTypescriptClientOnly> = {
  component: CodeBlockForTypescriptClientOnly,
};

// dirty hack but something is going on with storybook here.
// looks like registering components inside the storybook iframe causes a lot of pain.
// Lit components may have a related issue https://github.com/storybookjs/storybook/issues/12578
const fixCodeBlockForTypescript = (props?: Partial<CodeBlockForTypescriptProps>) => {
  setTimeout(() => {
    const codeBlock: any = document.querySelector("fsj-code-block-for-typescript");
    codeBlock.content = props?.content ?? `export function greetWorld() { console.log("Hello, world!"); }`;
    codeBlock.hideLineNumbers = props?.hideLineNumbers ?? false;
  });
};

export default meta;

export const Primary = () => {
  fixCodeBlockForTypescript({
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`
  });
  // @ts-ignore
  return <CodeBlockForTypescriptClientOnly />;
};

export const HideLineNumbers = () => {
  fixCodeBlockForTypescript({
    hideLineNumbers: true,
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`
  });
  // @ts-ignore
  return <CodeBlockForTypescriptClientOnly />;
};
