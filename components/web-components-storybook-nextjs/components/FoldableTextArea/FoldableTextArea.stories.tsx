import { Meta } from "@storybook/react";
import { FoldableTextAreaClientOnly } from "../../web-components-wrapper-nextjs/FoldableTextAreaClientOnly";
import { FoldableTextAreaProps } from "@fullstackjosh/web-components/FoldableTextArea";

const meta: Meta<typeof FoldableTextAreaClientOnly> = {
  component: FoldableTextAreaClientOnly,
};

// dirty hack but something is going on with storybook here.
// looks like registering components inside the storybook iframe causes a lot of pain.
// Lit components may have a related issue https://github.com/storybookjs/storybook/issues/12578
const fixFoldableTextArea = (props?: Partial<FoldableTextAreaProps>) => {
  setTimeout(() => {
    const panel: any = document.querySelector("fsj-foldable-textarea");
    panel.panelTitle = props?.panelTitle ?? "Foldable TextArea";
    panel.textAreaValue = props?.textAreaValue ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    panel.defaultChecked = props?.defaultChecked ?? false;
    panel.checkboxId = props?.checkboxId ?? "1234";
    panel.checkboxName = props?.checkboxName ?? "checkbox";
    panel.textAreaName = props?.textAreaName ?? "textarea";
  });
};

export default meta;

export const Primary = () => {
  fixFoldableTextArea({
    panelTitle: "Primary Foldable TextArea",
  });
  // @ts-ignore
  return <FoldableTextAreaClientOnly />;
};

export const Expanded = () => {
  fixFoldableTextArea({
    panelTitle: "Expanded Foldable TextArea",
    defaultChecked: true,
  });
  // @ts-ignore
  return <FoldableTextAreaClientOnly />;
};
