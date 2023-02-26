<template>
<svg
    class="animated-check-icon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    aria-hidden="true"
    :style="`
        --animated-check-path: '${tickProgression[tpIdx]}';
    `"
>
    <path
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
</template>

<script setup lang="ts">
const tickProgression = [
    "M9 12.75L9 12.75 9 12.75",
    "M9 12.75L11.25 15 11.25 15",
    "M9 12.75L11.25 15 15 9.75"
];

const tpIdx = ref(0);

setTimeout(() => tpIdx.value = 1, 100);
setTimeout(() => tpIdx.value = 2, 1100);

</script>

<style scoped>
path {
  d: path(var(--animated-check-path));
}
</style>

<style>
.animated-check-icon path {
  transition: all 1s ease;
}
</style>
