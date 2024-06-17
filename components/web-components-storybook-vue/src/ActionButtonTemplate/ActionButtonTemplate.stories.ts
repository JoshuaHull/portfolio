import { Meta, StoryObj } from "@storybook/vue3";
import ActionButtonTemplate from "./ActionButtonTemplate.vue";

const meta: Meta<typeof ActionButtonTemplate> = {
  title: "Buttons/SSR/ActionButton",
  component: ActionButtonTemplate,
};

export default meta;
type Story = StoryObj<typeof ActionButtonTemplate>;

export const Primary: Story = {
  args: {
    content: "click me",
  },
};

export const Disabled: Story = {
  args: {
    content: "click me",
    disabled: true,
  },
};
