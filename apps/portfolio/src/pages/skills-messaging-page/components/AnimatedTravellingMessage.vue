<template>
<div class="animated-travelling-message-icon">
  <IconContainer
    class="left-travelling-message"
    height="2rem"
  >
    <EnvelopeSolidIcon />
  </IconContainer>
</div>
</template>

<script setup lang="ts">
interface AnimatedTravellingMessageIconProps {
  // animationDurationInMs: number | null;
  variant: "NW" | "NE" | "SW" | "SE";
}

const props = defineProps<AnimatedTravellingMessageIconProps>();
const { variant } = toRefs(props);

const startY = computed(() => {
  switch (variant.value) {
    case "NW":
      return "240%";
    case "NE":
      return "240%";
    case "SW":
      return "-40%";
    case "SE":
      return "-40%";
  }
});

const endX = computed(() => {
  switch (variant.value) {
    case "NW":
      return "-40%";
    case "NE":
      return "40%";
    case "SW":
      return "-40%";
    case "SE":
      return "40%";
  }
});

const endY = computed(() => {
  switch (variant.value) {
    case "NW":
      return "20%";
    case "NE":
      return "20%";
    case "SW":
      return "170%";
    case "SE":
      return "170%";
  }
});
</script>

<style scoped>
.left-travelling-message {
  animation: travellingMessage forwards 1.5s;
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
