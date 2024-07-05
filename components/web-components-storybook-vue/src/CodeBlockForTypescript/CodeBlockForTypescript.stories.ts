import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForTypescript from "./CodeBlockForTypescript.vue";

const meta: Meta<typeof CodeBlockForTypescript> = {
  title: "Code Blocks/Hydrated/CodeBlockForTypescript",
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

export const PrimaryDarkTheme: Story = {
  ...Primary,
  name: "Primary (Dark Theme)",
  parameters: {
    theme: "dark",
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

export const HideLineNumbersDarkTheme: Story = {
  ...HideLineNumbers,
  name: "Hide Line Numbers (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
