<template>
<button :class="`v-button ${disabled ? 'disabled' : ''}`">
  <slot></slot>
</button>
</template>

<script setup lang="ts">
interface VButtonProps {
  disabled?: boolean;
}

defineProps<VButtonProps>();
</script>

<style>
.v-button {
  cursor: pointer;
}

.v-button.disabled {
  color: gray;
  cursor: not-allowed;
}
</style>
