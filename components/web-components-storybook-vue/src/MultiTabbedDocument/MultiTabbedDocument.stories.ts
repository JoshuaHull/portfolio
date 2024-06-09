import { Meta, StoryObj } from "@storybook/vue3";
import MultiTabbedDocument from "./MultiTabbedDocument.vue";

const meta: Meta<typeof MultiTabbedDocument> = {
  title: "Documents/Hydrated/MultiTabbedDocument",
  component: MultiTabbedDocument,
};

export default meta;
type Story = StoryObj<typeof MultiTabbedDocument>;

export const OneTab: Story = {
  args: {
    tabCount: 1,
    initialCurrentTab: 0,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const TwoTabsFirstSelected: Story = {
  args: {
    tabCount: 2,
    initialCurrentTab: 0,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
        <span slot="tab1title">
          Second
        </span>
        <div slot="tab1content">
          We should type a different amount of content here.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

export const TwoTabsSecondSelected: Story = {
  args: {
    tabCount: 2,
    initialCurrentTab: 1,
  },
  render: (args) => ({
    components: { MultiTabbedDocument },
    setup() {
      return {
        args,
      };
    },
    template: `
      <MultiTabbedDocument v-bind="args">
        <span slot="tab0title">
          First
        </span>
        <div slot="tab0content">
          We need to type enough content here to stretch beyond the width of the tab title.
        </div>
        <span slot="tab1title">
          Second
        </span>
        <div slot="tab1content">
          We should type a different amount of content here.
        </div>
      </MultiTabbedDocument>
    `,
  }),
};

