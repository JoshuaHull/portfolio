<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getFoldableTextAreaTemplate } from "@fullstackjosh/web-components/FoldableTextAreaTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  name: string;
  checked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaMaxLength: number;
  textAreaValue: string;
}>();

const {
  name,
  checked,
  panelTitle,
  disabled,
  textAreaPlaceholder,
  textAreaMaxLength,
  textAreaValue,
} = toRefs(props);

const template = getFoldableTextAreaTemplate();
const html = computed(() => template({
  name: name?.value,
  checked: checked?.value,
  panelTitle: panelTitle?.value,
  disabled: disabled?.value,
  textAreaPlaceholder: textAreaPlaceholder?.value,
  textAreaMaxLength: textAreaMaxLength?.value,
  textAreaValue: textAreaValue?.value,
}));
</script>
