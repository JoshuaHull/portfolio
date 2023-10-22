import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForTypescript from "./CodeBlockForTypescript.vue";

const meta: Meta<typeof CodeBlockForTypescript> = {
  component: CodeBlockForTypescript,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForTypescript>;

export const Primary: Story = {
  render: () => ({
    components: { CodeBlockForTypescript },
    template: `
      <CodeBlockForTypescript
        content='export function greetWorld() {
  console.log("Hello, world!");
}'
        :hideLineNumbers="false"
      />
    `,
  }),
};

export const HideLineNumbers: Story = {
  render: () => ({
    components: { CodeBlockForTypescript },
    template: `
      <CodeBlockForTypescript
        content='export function greetWorld() {
  console.log("Hello, world!");
}'
        :hideLineNumbers="true"
      />
    `,
  }),
};
