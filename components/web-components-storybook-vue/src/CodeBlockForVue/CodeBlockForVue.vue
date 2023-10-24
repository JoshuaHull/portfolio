<template>
<fsj-code-block-for-vue
  :content="content"
  :hideLineNumbers="hideLineNumbers"
/>
</template>

<script setup lang="ts">
import { registerCodeBlockForVue } from "@fullstackjosh/web-components/CodeBlockForVue";

registerCodeBlockForVue();

defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();
</script>
