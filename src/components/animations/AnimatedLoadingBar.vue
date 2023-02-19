<template>
<svg
  class="animated-loading-bar"
  viewBox="0 0 1100 140"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon points="35,0 1040,0 1005,140 0,140" fill="none" stroke="white" stroke-width="10" />

  <!-- loading parts -->
  <polygon points=" 45,20  120,20  95,120  20,120" class="loading-part" style="--loading-part: 1;" />
  <polygon points="145,20  220,20 195,120 120,120" class="loading-part" style="--loading-part: 2;" />
  <polygon points="245,20  320,20 295,120 220,120" class="loading-part" style="--loading-part: 3;" />
  <polygon points="345,20  420,20 395,120 320,120" class="loading-part" style="--loading-part: 4;" />
  <polygon points="445,20  520,20 495,120 420,120" class="loading-part" style="--loading-part: 5;" />
  <polygon points="545,20  620,20 595,120 520,120" class="loading-part" style="--loading-part: 6;" />
  <polygon points="645,20  720,20 695,120 620,120" class="loading-part" style="--loading-part: 7;" />
  <polygon points="745,20  820,20 795,120 720,120" class="loading-part" style="--loading-part: 8;" />
  <polygon points="845,20  920,20 895,120 820,120" class="loading-part" style="--loading-part: 9;" />
  <polygon points="945,20 1020,20 995,120 920,120" class="loading-part" style="--loading-part: 10;" />
</svg>
</template>

<script setup lang="ts">
interface AnimatedLoadingBarProps {
  animationDuration: number | null;
}

const props = defineProps<AnimatedLoadingBarProps>();
const { animationDuration } = toRefs(props);

const animationDurationInMs = computed(() => `${animationDuration.value}ms`);

// https://blog.logrocket.com/how-to-animate-svg-css-tutorial-examples/
// https://css-tricks.com/svg-path-syntax-illustrated-guide/
// https://css-tricks.com/svg-properties-and-css/#svg-elements-by-category
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
</script>

<style scoped>
.loading-part {
  opacity: 0;
  animation: fadeIn v-bind(animationDurationInMs);
  animation-delay: calc((v-bind(animationDurationInMs) / 15) * var(--loading-part));
  animation-fill-mode: forwards;
  fill: rgb(
    0,
    calc(55 + var(--loading-part) * 20),
    0
  );
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
</style>
