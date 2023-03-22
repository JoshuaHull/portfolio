<template>
<svg
  class="animated-cross-icon"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  aria-hidden="true"
  :style="`
    --animated-cross-path: '${crossProgression[progressIdx]}';
  `"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
</template>

<script setup lang="ts">
const crossProgression = [
  "M12 12L12 12M12 12L12 12",
  "M6 18L18 6M6 6L18 18",
];

const progressIdx = ref(0);

setTimeout(() => progressIdx.value = 1, 1000);
</script>

<style scoped>
path {
  d: path(var(--animated-cross-path));
}
</style>

<style>
.animated-cross-icon path {
  transition: all 1s ease;
}
</style>
