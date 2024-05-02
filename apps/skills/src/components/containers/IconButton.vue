<template>
<button
  :class="`icon-button ${isDisabled ? 'disabled' : ''}`"
  :style="`${theHeight} ${theWidth} ${theColor} ${theBorderRadius}`"
  :aria-disabled="isDisabled"
  aria-live="polite"
  @click="handleClick"
>
  <slot></slot>
</button>
</template>

<script setup lang="ts">
interface IconButtonProps {
  height?: string;
  width?: string;
  color?: string;
  disabled?: boolean;
  rounded?: boolean;
}

const props = defineProps<IconButtonProps>();
const { height, width, color, disabled, rounded } = toRefs(props);

const emit = defineEmits({
  click: null,
});

const theHeight = computed(() => !!height?.value ? `height: ${height.value};` : "");
const theWidth = computed(() => !!width?.value ? `width: ${width.value};` : "");
const theColor = computed(() => !!color?.value ? `color: ${color.value};` : "");
const theBorderRadius = computed(() => !!rounded?.value ? "border-radius: 0.25rem" : "");
const isDisabled = computed(() => !!disabled?.value);

const handleClick = () => {
  if (isDisabled.value)
    return;

  emit("click");
};
</script>

<style>
.icon-button {
  all: unset;
  cursor: pointer;
}

.icon-button:focus {
  outline: solid 2px;
}

.icon-button:hover,
.icon-button:focus {
  transform: scale(125%);
}

.icon-button.disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
  transform: initial;
  outline: none;
}
</style>
