<template>
<button
  :class="`v-button ${disabled ? 'disabled' : ''}`"
  :disabled="disabled"
>
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
  border-radius: 8px;
  background-color: var(--color-action-bg);
  color: var(--color-action);
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
}

.v-button.disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
</style>
