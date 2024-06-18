<template>
<fsj-action-button
  :disabled="disabled"
>
  <slot></slot>
</fsj-action-button>
</template>

<script setup lang="ts">
import { registerActionButton } from "@fullstackjosh/web-components/ActionButton";

registerActionButton();

defineProps<{
  disabled?: boolean;
}>();
</script>
