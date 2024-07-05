import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForVueTemplate from "./CodeBlockForVueTemplate.vue";

const meta: Meta<typeof CodeBlockForVueTemplate> = {
  title: "Code Blocks/SSR/CodeBlockForVue",
  component: CodeBlockForVueTemplate,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForVueTemplate>;

export const Primary: Story = {
  args: {
    hideLineNumbers: false,
    content: `<template>
<div class="story">
  Primary Story
</div>
</template>

<script setup>
const visits = ref(0);
</script>

<style>
@media (min-width: 768px) {
  .story {
    width: 30%;
  }
}
</style>`,
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
    content: `<template>
<div class="story">
  HideLineNumbers Story
</div>
</template>

<script setup>
const visits = ref(0);
</script>

<style>
@media (min-width: 768px) {
  .story {
    width: 30%;
  }
}
</style>`,
  },
};

export const HideLineNumbersDarkTheme: Story = {
  ...HideLineNumbers,
  name: "Hide Line Numbers (Dark Theme)",
  parameters: {
    theme: "dark",
  },
};
