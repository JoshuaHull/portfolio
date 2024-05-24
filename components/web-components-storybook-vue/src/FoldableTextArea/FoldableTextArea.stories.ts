import { Meta, StoryObj } from "@storybook/vue3";
import FoldableTextArea from "./FoldableTextArea.vue";

const meta: Meta<typeof FoldableTextArea> = {
  component: FoldableTextArea,
};

export default meta;
type Story = StoryObj<typeof FoldableTextArea>;

export const Primary: Story = {
  args: {
    name: "primary",
    dataTestId: "primary",
    checked: false,
    panelTitle: "Primary Foldable TextArea",
    disabled: false,
    textAreaPlaceholder: "placeholder",
    textAreaMaxLength: 100,
    textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};

export const Expanded: Story = {
  args: {
    name: "expanded",
    dataTestId: "expanded",
    checked: true,
    panelTitle: "Expanded Foldable TextArea",
    disabled: false,
    textAreaPlaceholder: "placeholder",
    textAreaMaxLength: 100,
    textAreaValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
};
