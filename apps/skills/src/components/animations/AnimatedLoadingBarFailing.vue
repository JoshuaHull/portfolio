<template>
<svg
  class="animated-loading-bar"
  viewBox="0 0 1100 140"
  xmlns="http://www.w3.org/2000/svg"
>
  <polygon points="35,0 1040,0 1005,140 0,140" fill="none" stroke="white" stroke-width="10" />

  <polygon points=" 45,20 120,20  95,120  20,120" class="loading-part" style="--loading-part: 1;" />
  <polygon points="145,20 220,20 195,120 120,120" class="loading-part" style="--loading-part: 2;" />
  <polygon points="245,20 320,20 295,120 220,120" class="loading-part" style="--loading-part: 3;" />
  <polygon points="345,20 420,20 395,120 320,120" class="loading-part" style="--loading-part: 4;" />
  <polygon points="445,20 520,20 495,120 420,120" class="loading-part" style="--loading-part: 5;" />
  <polygon points="545,20 620,20 595,120 520,120" class="loading-part" style="--loading-part: 6;" />
  <polygon points="645,20 720,20 695,120 620,120" class="loading-part" style="--loading-part: 7;" />
</svg>
</template>

<script setup lang="ts">
interface AnimatedLoadingBarFailingProps {
  animationDuration: number | null;
}

const props = defineProps<AnimatedLoadingBarFailingProps>();
const { animationDuration } = toRefs(props);

const animationDurationInMs = computed(() => `${animationDuration.value}ms`);

const toggleRed = ref(0);
const toggleGreen = ref(1);

watch (animationDuration, d => {
  if (!d)
    return;

  setTimeout(() => {
    toggleRed.value = 1;
    toggleGreen.value = 0;
  }, d - 200);
});
</script>

<style scoped>
.loading-part {
  animation: loadingBarFailingFrames forwards v-bind(animationDurationInMs);
  animation-delay: calc((v-bind(animationDurationInMs) / 15) * var(--loading-part));
  transition: fill 0.5s;
  fill: rgb(
    calc((55 + var(--loading-part) * 20) * v-bind(toggleRed)),
    calc((55 + var(--loading-part) * 20) * v-bind(toggleGreen)),
    0
  );
}
</style>

<style>
.loading-part {
  opacity: 0;
}

@keyframes loadingBarFailingFrames {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 100;
  }
}
</style>
