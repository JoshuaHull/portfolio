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

export const PrimaryDarkTheme: Story = {
  ...Primary,
  name: "Primary (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};

export const Disabled: Story = {
  args: {
    content: "click me",
    disabled: true,
  },
};

export const DisabledDarkTheme: Story = {
  ...Disabled,
  name: "Disabled (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
