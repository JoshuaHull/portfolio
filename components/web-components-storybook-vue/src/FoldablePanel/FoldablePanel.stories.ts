import { Meta, StoryObj } from "@storybook/vue3";
import FoldablePanel from "./FoldablePanel.vue";

const meta: Meta<typeof FoldablePanel> = {
  title: "Foldables/Hydrated/FoldablePanel",
  component: FoldablePanel,
};

export default meta;
type Story = StoryObj<typeof FoldablePanel>;

export const Primary: Story = {
  args: {
    checkboxId: "1234",
    defaultChecked: false,
    panelTitle: "Primary Foldable Panel",
    panelContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};

export const PrimaryDarkTheme: Story = {
  ...Primary,
  name: "Primary (Dark Theme)",
  parameters: {
    theme: "dark",
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

export const ExpandedDarkTheme: Story = {
  ...Expanded,
  name: "Expanded (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
