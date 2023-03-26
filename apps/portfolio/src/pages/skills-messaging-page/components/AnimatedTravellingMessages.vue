<template>
<TransitionGroup name="travelling-message">
  <template v-for="m of messages" :key="m">
    <AnimatedTravellingMessage
      :class="messageClasses"
      :variant="variant"
      :animationDuration="animationDuration"
    >
    </AnimatedTravellingMessage>
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

defineProps<AnimatedTravellingMessageProps>();
</script>

<style>
.travelling-message-leave-active {
  transition: opacity 0.5s ease;
}

.travelling-message-leave-to {
  opacity: 0;
}
</style>
