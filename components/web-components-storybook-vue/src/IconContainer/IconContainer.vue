<template>
<fsj-icon-container
  :height="height"
  :width="width"
  :color="color"
>
  <slot></slot>
</fsj-icon-container>
</template>

<script setup lang="ts">
import { registerIconContainer } from "@fullstackjosh/web-components/IconContainer";

registerIconContainer();

defineProps<{
  height?: string;
  width?: string;
  color?: string;
}>();
</script>
