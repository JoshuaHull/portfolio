import { Meta } from "@storybook/react";
import { FoldablePanelClientOnly } from "../../web-components-wrapper-nextjs/FoldablePanelClientOnly";
import { FoldablePanelProps } from "@fullstackjosh/web-components/FoldablePanel";

const meta: Meta<typeof FoldablePanelClientOnly> = {
  component: FoldablePanelClientOnly,
};

// dirty hack but something is going on with storybook here.
// looks like registering components inside the storybook iframe causes a lot of pain.
// Lit components may have a related issue https://github.com/storybookjs/storybook/issues/12578
const fixFoldablePanel = (props?: Partial<FoldablePanelProps>) => {
  setTimeout(() => {
    const panel: any = document.querySelector("fsj-foldable-panel");
    panel.panelTitle = props?.panelTitle ?? "Foldable Panel";
    panel.panelContent = props?.panelContent ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    panel.defaultChecked = props?.defaultChecked ?? false;
    panel.checkboxId = props?.checkboxId ?? "1234";
  });
};

export default meta;

export const Primary = () => {
  fixFoldablePanel({
    panelTitle: "Primary Foldable Panel",
  });
  // @ts-ignore
  return <FoldablePanelClientOnly />;
};

export const Expanded = () => {
  fixFoldablePanel({
    panelTitle: "Expanded Foldable Panel",
    defaultChecked: true,
  });
  // @ts-ignore
  return <FoldablePanelClientOnly />;
};
