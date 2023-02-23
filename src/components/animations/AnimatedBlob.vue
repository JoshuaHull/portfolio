<template>
<svg
  tabindex="0"
  :class="`animated-blob ${isHovering ? 'hovering' : ''}`"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
  :aria-label="`blob-${colour}`"
  @mouseenter="handleHover"
  :style="`
    --animated-blob-path-idle: '${blobs[idleBlobIdx]}';
    --animated-blob-path-active: '${blobs[activeBlobIdx]}';
  `"
>
  <path :fill="colour" transform="translate(90 90)" />
</svg>
</template>

<script setup lang="ts">
import { useVanishingObject } from "@composables";
import { store } from "@store";

interface AnimatedBlobProps {
  colour: string;
  idleBlobIdx: number;
  activeBlobIdx: number;
  left?: string;
  top?: string;
}

const props = defineProps<AnimatedBlobProps>();
const { left, top, colour, idleBlobIdx, activeBlobIdx } = toRefs(props);

const actualLeft = computed(() => left?.value ?? "auto");
const actualTop = computed(() => top?.value ?? "auto");

const [isHovering, pushIsHovering] = useVanishingObject<boolean>(500);

const blobs = store.blobs;

function handleHover() {
  pushIsHovering(true);
}
</script>

<style scoped>
.animated-blob {
  left: v-bind(actualLeft);
  top: v-bind(actualTop);
}

path {
  d: path(var(--animated-blob-path-idle));
}

.animated-blob.hovering path,
.animated-blob:hover path,
.animated-blob:focus path {
  d: path(var(--animated-blob-path-active));
}
</style>

<style>
.animated-blob path {
  transition: all 0.5s ease;
}

.animated-blob:focus,
.animated-blob:hover {
  cursor: pointer;
  outline: 2px solid white;
  border-radius: 1rem;
}
</style>
