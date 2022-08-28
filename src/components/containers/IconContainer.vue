<template>
<div
  class="icon-container"
  :style="`${theHeight} ${theWidth} ${theColor}`"
>
  <slot></slot>
</div>
</template>

<script setup lang="ts">
interface IconContainerProps {
  height?: string;
  width?: string;
  color?: string;
}

const props = defineProps<IconContainerProps>();
const { height, width, color } = toRefs(props);

const theHeight = computed(() => !!height?.value ? `height: ${height.value};` : "");
const theWidth = computed(() => !!width?.value ? `width: ${width.value};` : "");
const theColor = computed(() => !!color?.value ? `color: ${color.value};` : "");
</script>
