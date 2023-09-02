import { Meta, StoryObj } from "@storybook/vue3";
import FoldablePanel from "./FoldablePanel.vue";

const meta: Meta<typeof FoldablePanel> = {
  component: FoldablePanel,
};

export default meta;
type Story = StoryObj<typeof FoldablePanel>;

export const Primary: Story = {
  render: () => ({
    components: { FoldablePanel },
    template: `
      <FoldablePanel
        :defaultChecked="false"
        panelTitle="Primary Foldable Panel"
        panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    `,
  }),
};

export const Expanded: Story = {
  render: () => ({
    components: { FoldablePanel },
    template: `
      <FoldablePanel
        :defaultChecked="true"
        panelTitle="Expanded Foldable Panel"
        panelContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
      />
    `,
  }),
};
