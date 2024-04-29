<template>
<article class="messaging-article-content">
  <div class="messaging-servers">
    <IconContainer
      class="messaging-server grid-area-server1"
      :height="serverIconHeight"
    >
      <HeroServerSolid />
    </IconContainer>
    <AnimatedTravellingMessages
      :animationDuration="travellingMessageAnimationDuration"
      :messages="messages"
      messageClasses="grid-area-joiner1"
      variant="NW"
    />
    <IconContainer
      class="server-joiner grid-area-joiner1"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <AnimatedTravellingMessages
      :animationDuration="travellingMessageAnimationDuration"
      :messages="messages"
      messageClasses="grid-area-joiner1"
      variant="NE"
    />
    <IconContainer
      class="messaging-server grid-area-server2"
      :height="serverIconHeight"
    >
      <HeroServerSolid />
    </IconContainer>
    <IconButton
      class="grid-area-stack"
      height="5rem"
      width="5rem"
      aria-label="distribute a message to child servers"
      :rounded="true"
      :inverted="true"
      @click="handleServerStackClick"
    >
      <HeroServerStackSolid />
    </IconButton>
    <Transition name="fade-in-out">
      <div
        v-if="shouldShowClickMe"
        class="messaging-clickme grid-area-clickme"
      >
        <span v-if="isMediumScreen">click me</span>
        <span v-else>tap me</span>
        <IconContainer
          class="messaging-clickme-arrow"
          height="1rem"
        >
          <HeroArrowLongLeftSolid />
        </IconContainer>
      </div>
    </Transition>
    <IconContainer
      class="messaging-server grid-area-server3"
      :height="serverIconHeight"
    >
      <HeroServerSolid />
    </IconContainer>
    <AnimatedTravellingMessages
      :animationDuration="travellingMessageAnimationDuration"
      :messages="messages"
      messageClasses="grid-area-joiner2"
      variant="SW"
    />
    <IconContainer
      class="server-joiner rotate-180 grid-area-joiner2"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <AnimatedTravellingMessages
      :animationDuration="travellingMessageAnimationDuration"
      :messages="messages"
      messageClasses="grid-area-joiner2"
      variant="SE"
    />
    <IconContainer
      class="messaging-server grid-area-server4"
      :height="serverIconHeight"
    >
      <HeroServerSolid />
    </IconContainer>
  </div>
</article>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { useVanishingValues } from "use-vanishing-values";

const travellingMessageAnimationDuration = 1500;

let messageKey = 0;

const [messages, pushMessage] = useVanishingValues<number>(travellingMessageAnimationDuration);

const serverIconHeight = "3rem";
const joinerIconHeight = "6rem";

const hasClickedClickMe = ref(false);
const shouldShowClickMe = computed(() => messages.value.length === 0 && !hasClickedClickMe.value);
const isMediumScreen = useMediaQuery("(min-width: 768px)");

const handleServerStackClick = () => {
  hasClickedClickMe.value = true;
  pushMessage(messageKey += 1);
  setTimeout(() => hasClickedClickMe.value = false, 2000);
};
</script>

<style>
.messaging-article-content {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}

.messaging-servers {
  display: grid;
  grid-template-columns: 0.6fr 0.4fr 1fr 0.4fr 0.6fr;
  grid-template-areas:
    "server1 joiner1 joiner1 joiner1 server2"
    "      . joiner1 joiner1 joiner1       ."
    "      .       .   stack clickme clickme"
    "      . joiner2 joiner2 joiner2       ."
    "server3 joiner2 joiner2 joiner2 server4"
  ;
}

.grid-area-server1 {
  grid-area: server1;
}

.grid-area-server2 {
  grid-area: server2;
}

.grid-area-server3 {
  grid-area: server3;
}

.grid-area-server4 {
  grid-area: server4;
}

.grid-area-joiner1 {
  grid-area: joiner1;
}

.grid-area-joiner2 {
  grid-area: joiner2;
}

.grid-area-clickme {
  grid-area: clickme;
}

.grid-area-stack {
  grid-area: stack;
}

.messaging-clickme {
  display: grid;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-content: center;
}

.messaging-clickme-arrow {
  transform: scaleX(300%);
}

.rotate-180 svg {
  transform: rotate(180deg);
}
</style>
