import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForTypescriptTemplate from "./CodeBlockForTypescriptTemplate.vue";

const meta: Meta<typeof CodeBlockForTypescriptTemplate> = {
  title: "Code Blocks/SSR/CodeBlockForTypescript",
  component: CodeBlockForTypescriptTemplate,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForTypescriptTemplate>;

export const Primary: Story = {
  args: {
    hideLineNumbers: false,
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`,
  },
};

export const Expanded: Story = {
  args: {
    hideLineNumbers: true,
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`,
  },
};
