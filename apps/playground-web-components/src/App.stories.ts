import { Meta, StoryObj } from "@storybook/vue3";
import App from "./App.vue";

const meta: Meta<typeof App> = {
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

export const Primary: Story = {
  render: () => ({
    components: { App },
    template: '<App />',
  }),
};
