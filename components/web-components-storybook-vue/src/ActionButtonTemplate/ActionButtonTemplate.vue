<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getActionButtonTemplate } from "@fullstackjosh/web-components/ActionButtonTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  content: string;
  disabled?: boolean;
}>();

const { content, disabled } = toRefs(props);

const template = getActionButtonTemplate();
const html = computed(() => template({
  content: content.value,
  disabled: disabled.value,
}));
</script>
