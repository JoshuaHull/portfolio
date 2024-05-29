<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getCodeBlockForCSharpTemplate } from "@fullstackjosh/web-components/CodeBlockForCSharpTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();

const { content, hideLineNumbers } = toRefs(props);

const template = getCodeBlockForCSharpTemplate();
const html = computed(() => template({
  content: content.value,
  hideLineNumbers: hideLineNumbers.value,
}));
</script>
