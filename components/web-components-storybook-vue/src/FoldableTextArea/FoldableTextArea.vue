<template>
<fsj-foldable-textarea
  :name="name"
  :data-testid="dataTestId"
  :checked="checked"
  :panelTitle="panelTitle"
  :disabled="disabled"
  :textAreaPlaceholder="textAreaPlaceholder"
  :textAreaMaxLength="textAreaMaxLength"
  :textAreaValue="textAreaValue"
/>
</template>

<script setup lang="ts">
import { registerFoldableTextArea } from "@fullstackjosh/web-components/FoldableTextArea";

registerFoldableTextArea();

defineProps<{
  name: string;
  dataTestId: string | undefined;
  checked: boolean;
  panelTitle: string;
  disabled: boolean;
  textAreaPlaceholder: string;
  textAreaMaxLength: number;
  textAreaValue: string;
}>();
</script>
