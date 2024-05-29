<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getCodeBlockForTypescriptTemplate } from "@fullstackjosh/web-components/CodeBlockForTypescriptTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();

const { content, hideLineNumbers } = toRefs(props);

const template = getCodeBlockForTypescriptTemplate();
const html = computed(() => template({
  content: content.value,
  hideLineNumbers: hideLineNumbers.value,
}));
</script>
