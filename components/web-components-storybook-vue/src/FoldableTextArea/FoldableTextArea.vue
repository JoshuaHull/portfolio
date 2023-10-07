<template>
<fsj-foldable-textarea
  :checkboxId="checkboxId"
  :checkboxName="checkboxName"
  :defaultChecked="defaultChecked"
  :panelTitle="panelTitle"
  :disabled="disabled"
  :textAreaPlaceholder="textAreaPlaceholder"
  :textAreaName="textAreaName"
  :textAreaMaxLength="textAreaMaxLength"
  :textAreaValue="textAreaValue"
/>
</template>

<script setup lang="ts">
import { registerFoldableTextArea } from "@fullstackjosh/web-components/FoldableTextArea";

registerFoldableTextArea();

defineProps<{
  checkboxId: string;
  checkboxName: string;
  defaultChecked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaName: string;
  textAreaMaxLength: number;
  textAreaValue: string;
}>();
</script>
