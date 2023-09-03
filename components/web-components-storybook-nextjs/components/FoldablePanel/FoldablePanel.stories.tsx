import { Meta, StoryObj } from "@storybook/react";
import { FoldablePanelClientOnly } from "../../web-components-wrapper-nextjs/FoldablePanelClientOnly";

const meta: Meta<typeof FoldablePanelClientOnly> = {
  component: FoldablePanelClientOnly,
};

export default meta;
type Story = StoryObj<typeof FoldablePanelClientOnly>;

export const Primary: Story = {
  render: () => (
    <FoldablePanelClientOnly
      defaultChecked={false}
      panelTitle="Primary Foldable Panel"
      panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    />
  ),
};

export const Expanded: Story = {
  render: () => (
    <FoldablePanelClientOnly
      defaultChecked={true}
      panelTitle="Expanded Foldable Panel"
      panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    />
  ),
};
