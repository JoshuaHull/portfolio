<template>
<TransitionGroup name="travelling-message">
  <template v-for="m of messages" :key="m">
    <IconContainer
      :class="`animated-travelling-message ${messageClasses}`"
      height="1.5rem"
    >
      <EnvelopeSolidIcon />
    </IconContainer>
  </template>
</TransitionGroup>
</template>

<script setup lang="ts">
import { AnimatedTravellingMessageVariant } from "./animated-travelling-message-variant";

interface AnimatedTravellingMessageProps {
  messages: number[];
  messageClasses: string;
  variant: AnimatedTravellingMessageVariant;
  animationDuration: number | null;
}

const props = defineProps<AnimatedTravellingMessageProps>();

const {
  animationDuration,
  messageClasses,
  messages,
  variant,
} = toRefs(props);

const animationDurationInMs = computed(() => `${animationDuration.value}ms`);
const movingRight = computed(() => variant.value.endsWith("E"));
const movingDown = computed(() => variant.value.startsWith("S"));

const startY = computed(() => movingDown.value ? "-40%" : "340%");
const endX = computed(() => movingRight.value ? "40%" : "-40%");
const endY = computed(() => movingDown.value ? "170%" : "-20%");
</script>

<style scoped>
div { /* carefully not overriding the specificity of the exit animation */
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

.travelling-message-leave-active {
  animation: animatedTravellingMessageExit 0.5s;
}

@keyframes animatedTravellingMessageExit {
  0% {
    transform: translate(v-bind(endX), v-bind(endY));
  }

  100% {
    transform: translate(v-bind(endX), v-bind(endY));
    opacity: 0;
  }
}
</style>
