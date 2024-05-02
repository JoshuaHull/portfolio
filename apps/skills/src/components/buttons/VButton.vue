<template>
<button
  :class="`v-button ${disabled ? 'disabled' : ''}`"
  :aria-disabled="disabled"
  aria-live="polite"
  @click="handleClick"
>
  <slot></slot>
</button>
</template>

<script setup lang="ts">
interface VButtonProps {
  disabled?: boolean;
}

const props = defineProps<VButtonProps>();
const { disabled } = toRefs(props);

const emit = defineEmits({
  click: null,
});

const isDisabled = computed(() => !!disabled?.value);

const handleClick = () => {
  if (isDisabled.value)
    return;

  emit("click");
};
</script>

<style>
.v-button {
  cursor: pointer;
  border-radius: 8px;
  background-color: var(--color-action-bg);
  color: var(--color-action);
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  height: min-content;
}

.v-button.disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
</style>
