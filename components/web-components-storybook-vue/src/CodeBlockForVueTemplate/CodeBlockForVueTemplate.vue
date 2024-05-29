<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getCodeBlockForVueTemplate } from "@fullstackjosh/web-components/CodeBlockForVueTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();

const { content, hideLineNumbers } = toRefs(props);

const template = getCodeBlockForVueTemplate();
const html = computed(() => template({
  content: content.value,
  hideLineNumbers: hideLineNumbers.value,
}));
</script>
