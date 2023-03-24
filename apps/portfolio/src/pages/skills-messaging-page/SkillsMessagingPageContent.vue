<template>
<article class="skills-messaging">
  <div class="messaging-servers">
    <IconContainer
      class="messaging-server messaging-server-1"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <IconContainer
      class="server-joiner server-joiner-1"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <IconContainer
      class="messaging-server messaging-server-2"
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
      class="messaging-server messaging-server-3"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <IconContainer
      class="server-joiner server-joiner-2"
      :height="joinerIconHeight"
    >
      <ServerJoiningIcon />
    </IconContainer>
    <IconContainer
      class="messaging-server messaging-server-4"
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

.messaging-server-1 {
  grid-area: server1;
}

.server-joiner-1 {
  grid-area: joiner1;
}

.messaging-server-2 {
  grid-area: server2;
}

.messaging-serverstack {
  grid-area: stack;
}

.messaging-server-3 {
  grid-area: server3;
}

.server-joiner-2 {
  grid-area: joiner2;
}

.server-joiner-2 svg {
  transform: rotate(180deg);
}

.messaging-server-4 {
  grid-area: server4;
}
</style>
