import { Meta, StoryObj } from "@storybook/vue3";
import FoldablePanelTemplate from "./FoldablePanelTemplate.vue";

const meta: Meta<typeof FoldablePanelTemplate> = {
  title: "Foldables/SSR/FoldablePanel",
  component: FoldablePanelTemplate,
};

export default meta;
type Story = StoryObj<typeof FoldablePanelTemplate>;

export const Primary: Story = {
  args: {
    checkboxId: "1234",
    defaultChecked: false,
    panelTitle: "Primary Foldable Panel",
    panelContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};

export const Expanded: Story = {
  args: {
    checkboxId: "1234",
    defaultChecked: true,
    panelTitle: "Expanded Foldable Panel",
    panelContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};
