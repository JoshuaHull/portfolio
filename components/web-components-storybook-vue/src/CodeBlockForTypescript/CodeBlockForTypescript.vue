<template>
<fsj-code-block-for-typescript
  :content="content"
  :hideLineNumbers="hideLineNumbers"
/>
</template>

<script setup lang="ts">
import { registerCodeBlockForTypescript } from "@fullstackjosh/web-components/CodeBlockForTypescript";

registerCodeBlockForTypescript();

defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();
</script>
