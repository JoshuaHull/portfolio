<template>
<button
  :class="`icon-button ${isDisabled ? 'disabled' : ''}`"
  :style="`${theHeight} ${theWidth} ${theColor}`"
  :tabindex="isDisabled ? -1 : 0"
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
}

const props = defineProps<IconButtonProps>();
const { height, width, color, disabled } = toRefs(props);

const theHeight = computed(() => !!height?.value ? `height: ${height.value};` : "");
const theWidth = computed(() => !!width?.value ? `width: ${width.value};` : "");
const theColor = computed(() => !!color?.value ? `color: ${color.value};` : "");
const isDisabled = computed(() => !!disabled?.value);
</script>

<style>
.icon-button {
  all: unset;
  cursor: pointer;
}

.icon-button:focus {
  outline: white auto 5px;
}

.icon-button:hover,
.icon-button:focus {
  transform: scale(125%);
}

.icon-button.disabled {
  color: gray;
  cursor: not-allowed;
  transform: initial;
  outline: none;
}
</style>
