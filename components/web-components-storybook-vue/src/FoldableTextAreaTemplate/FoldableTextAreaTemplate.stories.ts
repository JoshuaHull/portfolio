import { Meta, StoryObj } from "@storybook/vue3";
import FoldableTextAreaTemplate from "./FoldableTextAreaTemplate.vue";

const meta: Meta<typeof FoldableTextAreaTemplate> = {
  title: "Foldables/SSR/FoldableTextArea",
  component: FoldableTextAreaTemplate,
};

export default meta;
type Story = StoryObj<typeof FoldableTextAreaTemplate>;

export const Primary: Story = {
  args: {
    name: "primary",
    checkboxId: "1234",
    checked: false,
    panelTitle: "Primary Foldable TextArea",
    disabled: false,
    textAreaPlaceholder: "placeholder",
    textAreaMaxLength: 100,
    textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
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
    name: "expanded",
    checkboxId: "1234",
    checked: true,
    panelTitle: "Expanded Foldable TextArea",
    disabled: false,
    textAreaPlaceholder: "placeholder",
    textAreaMaxLength: 100,
    textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};

export const ExpandedDarkTheme: Story = {
  ...Expanded,
  name: "Expanded (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
