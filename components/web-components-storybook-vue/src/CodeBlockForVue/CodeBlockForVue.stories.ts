import { Meta, StoryObj } from "@storybook/vue3";
import CodeBlockForVue from "./CodeBlockForVue.vue";

const meta: Meta<typeof CodeBlockForVue> = {
  component: CodeBlockForVue,
};

export default meta;
type Story = StoryObj<typeof CodeBlockForVue>;

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

export const HideLineNumbers: Story = {
  args: {
    hideLineNumbers: true,
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
