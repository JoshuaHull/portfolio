<template>
<fsj-multi-tabbed-document
  :tabCount="tabCount"
  :initialCurrentTab="initialCurrentTab"
  :variant="variant"
>
  <slot></slot>
</fsj-multi-tabbed-document>
</template>

<script setup lang="ts">
import { registerMultiTabbedDocument } from "@fullstackjosh/web-components/MultiTabbedDocument";

registerMultiTabbedDocument();

defineProps<{
  tabCount: number;
  initialCurrentTab: number;
  variant?: "editor";
}>();
</script>
