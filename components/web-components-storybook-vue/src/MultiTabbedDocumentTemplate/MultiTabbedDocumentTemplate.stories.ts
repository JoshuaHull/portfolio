import { Meta, StoryObj } from "@storybook/vue3";
import MultiTabbedDocumentTemplate from "./MultiTabbedDocumentTemplate.vue";

const meta: Meta<typeof MultiTabbedDocumentTemplate> = {
  title: "Documents/SSR/MultiTabbedDocument",
  component: MultiTabbedDocumentTemplate,
};

export default meta;
type Story = StoryObj<typeof MultiTabbedDocumentTemplate>;

export const OneTab: Story = {
  args: {
    tabCount: 1,
    tabTitles: ["First"],
    currentTab: 0,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
    ],
  },
};

export const TwoTabsFirstSelected: Story = {
  args: {
    tabCount: 2,
    tabTitles: ["First", "Second"],
    currentTab: 0,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
    ],
  },
};

export const TwoTabsSecondSelected: Story = {
  args: {
    tabCount: 2,
    tabTitles: ["First", "Second"],
    currentTab: 1,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
    ],
  },
};

export const ThreeTabsThirdSelected: Story = {
  args: {
    tabCount: 3,
    tabTitles: ["First", "Second", "<b>Third</b>"],
    currentTab: 2,
    tabContents: [
      "We need to type enough content here to stretch beyond the width of the tab title.",
      "We should type a different amount of content here.",
      `Then finally, we introduce a third tab. We'll also use this tab to make sure HTML <br />
      renders properly in the document content. <em>And it does</em>.`,
    ],
  },
};
