import { Meta, StoryObj } from "@storybook/vue3";
import ActionButton from "./ActionButton.vue";

const meta: Meta<typeof ActionButton> = {
  title: "Buttons/Hydrated/ActionButton",
  component: ActionButton,
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Primary: Story = {
  args: {
  },
  render: (args) => ({
    components: { ActionButton },
    setup() {
      return {
        args,
      };
    },
    template: `
      <ActionButton v-bind="args">
        click me
      </ActionButton>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { ActionButton },
    setup() {
      return {
        args,
      };
    },
    template: `
      <ActionButton v-bind="args">
        click me
      </ActionButton>
    `,
  }),
};
