import { Meta, StoryObj } from "@storybook/vue3";
import IconContainer from "./IconContainer.vue";
import { StarIcon } from "@heroicons/vue/24/solid";

const meta: Meta<typeof IconContainer> = {
  component: IconContainer,
};

export default meta;
type Story = StoryObj<typeof IconContainer>;

export const HeroIcon: Story = {
  args: {
    height: "5rem",
    width: "5rem",
    color: "#FF0044",
  },
  render: (args) => ({
    components: { IconContainer, StarIcon },
    setup() {
      return {
        args,
      };
    },
    template: `
      <IconContainer v-bind="args">
        <StarIcon />
      </IconContainer>
    `,
  }),
};
