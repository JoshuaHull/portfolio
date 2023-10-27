import { Meta } from "@storybook/react";
import { CodeBlockForCSharpClientOnly } from "../../web-components-wrapper-nextjs/CodeBlockForCSharpClientOnly";
import { CodeBlockForCSharpProps } from "@fullstackjosh/web-components/CodeBlockForCSharp";

const meta: Meta<typeof CodeBlockForCSharpClientOnly> = {
  component: CodeBlockForCSharpClientOnly,
};

// dirty hack but something is going on with storybook here.
// looks like registering components inside the storybook iframe causes a lot of pain.
// Lit components may have a related issue https://github.com/storybookjs/storybook/issues/12578
const fixCodeBlockForCSharp = (props?: Partial<CodeBlockForCSharpProps>) => {
  setTimeout(() => {
    const codeBlock: any = document.querySelector("fsj-code-block-for-csharp");
    codeBlock.content = props?.content ?? `public class User { public int Id { get; set; } }`;
    codeBlock.hideLineNumbers = props?.hideLineNumbers ?? false;
  });
};

export default meta;

export const Primary = () => {
  fixCodeBlockForCSharp({
    content: `public class User {
  public static string Type = "Primary";

  public int Id { get; set; }
}`
  });
  // @ts-ignore
  return <CodeBlockForCSharpClientOnly />;
};

export const HideLineNumbers = () => {
  fixCodeBlockForCSharp({
    hideLineNumbers: true,
    content: `public class User {
  public static string Type = "HideLineNumbers";

  public int Id { get; set; }
}`
  });
  // @ts-ignore
  return <CodeBlockForCSharpClientOnly />;
};
