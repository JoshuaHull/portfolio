<template>
<IconContainer
  class="animated-travelling-message"
  height="2rem"
>
  <EnvelopeSolidIcon />
</IconContainer>
</template>

<script setup lang="ts">
interface AnimatedTravellingMessageIconProps {
  animationDuration: number | null;
  variant: "NW" | "NE" | "SW" | "SE";
}

const props = defineProps<AnimatedTravellingMessageIconProps>();
const { animationDuration, variant } = toRefs(props);

const animationDurationInMs = computed(() => `${animationDuration.value}ms`);
const movingRight = computed(() => variant.value.endsWith("E"));
const movingDown = computed(() => variant.value.startsWith("S"));

const startY = computed(() => movingDown.value ? "-40%" : "240%");
const endX = computed(() => movingRight.value ? "40%" : "-40%");
const endY = computed(() => movingDown.value ? "170%" : "20%");
</script>

<style scoped>
.animated-travelling-message {
  animation: travellingMessage forwards v-bind(animationDurationInMs);
}

@keyframes travellingMessage {
  0% {
    transform: translateY(v-bind(startY));
  }

  50% {
    transform: translate(0%, v-bind(endY));
  }

  100% {
    transform: translate(v-bind(endX), v-bind(endY));
  }
}
</style>
