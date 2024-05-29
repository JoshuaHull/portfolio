import { Meta, StoryObj } from "@storybook/vue3";
import IconContainerTemplate from "./IconContainerTemplate.vue";
import { StarIcon } from "@heroicons/vue/24/solid";

const meta: Meta<typeof IconContainerTemplate> = {
  title: "Icons/SSR/IconContainer",
  component: IconContainerTemplate,
};

export default meta;
type Story = StoryObj<typeof IconContainerTemplate>;

export const HeroIcon: Story = {
  args: {
    height: "5rem",
    width: "5rem",
    color: "#FF0044",
  },
  render: (args) => ({
    components: { IconContainerTemplate, StarIcon },
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
