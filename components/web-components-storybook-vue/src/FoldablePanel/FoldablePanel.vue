<template>
<fsj-foldable-panel
  checkboxId="1231"
  :panelTitle="panelTitle"
  :panelContent="panelContent"
  :defaultChecked="defaultChecked"
/>
</template>

<script setup lang="ts">
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

registerFoldablePanel();

defineProps<{
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
  defaultChecked: boolean;
}>();
</script>
