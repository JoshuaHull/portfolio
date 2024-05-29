import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForTypescript from "./CodeBlockForTypescript.vue";

const meta: Meta<typeof CodeBlockForTypescript> = {
  component: CodeBlockForTypescript,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForTypescript>;

export const Primary: Story = {
  args: {
    hideLineNumbers: false,
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`,
  },
};

export const HideLineNumbers: Story = {
  args: {
    hideLineNumbers: true,
    content: `export function greetWorld() {
  console.log("Hello, world!");
}`,
  },
};
