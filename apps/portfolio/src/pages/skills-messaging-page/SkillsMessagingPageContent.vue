<template>
<article class="skills-messaging">
  <div class="messaging-servers">
    <IconContainer
      class="messaging-server grid-area-server1"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <AnimatedTravellingMessage
      class="travelling-message-icon grid-area-joiner1"
      variant="NW"
    >
    </AnimatedTravellingMessage>
    <IconContainer
      class="server-joiner grid-area-joiner1"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <AnimatedTravellingMessage
      class="travelling-message-icon grid-area-joiner1"
      variant="NE"
    >
    </AnimatedTravellingMessage>
    <IconContainer
      class="messaging-server grid-area-server2"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <IconButton
      class="messaging-serverstack"
      height="5rem"
      width="5rem"
      @click="handleServerStackClick"
    >
      <ServerStackSolidIcon />
    </IconButton>
    <IconContainer
      class="messaging-server grid-area-server3"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <AnimatedTravellingMessage
      class="travelling-message-icon grid-area-joiner2"
      variant="SW"
    >
    </AnimatedTravellingMessage>
    <IconContainer
      class="server-joiner rotate-180 grid-area-joiner2"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <AnimatedTravellingMessage
      class="travelling-message-icon grid-area-joiner2"
      variant="SE"
    >
    </AnimatedTravellingMessage>
    <IconContainer
      class="messaging-server grid-area-server4"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
  </div>
</article>
</template>

<script setup lang="ts">
const serverIconHeight = "3rem";
const joinerIconHeight = "6rem";

const handleServerStackClick = () => {};
</script>

<style>
.skills-messaging {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}

.messaging-servers {
  display: grid;
  grid-template-areas:
    "server1 joiner1 joiner1 joiner1 server2"
    "      . joiner1 joiner1 joiner1       ."
    "      .       .   stack       .       ."
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

.messaging-serverstack {
  grid-area: stack;
}

.rotate-180 svg {
  transform: rotate(180deg);
}
</style>
