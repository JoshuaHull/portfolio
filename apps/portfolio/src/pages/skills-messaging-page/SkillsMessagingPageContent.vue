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
      class="messaging-server messaging-server-2"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
    <IconButton
      class="messaging-serverstack"
      height="5rem"
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
      class="messaging-server messaging-server-4"
      :height="serverIconHeight"
    >
      <ServerSolidIcon />
    </IconContainer>
  </div>
</article>
</template>

<script setup lang="ts">
const serverIconHeight = "11rem";

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
    "server1 . server2"
    ". stack ."
    "server3 . server4"
  ;
}

.messaging-server {
  padding: 4rem;
}

.messaging-server-1 {
  grid-area: server1;
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

.messaging-server-4 {
  grid-area: server4;
}
</style>
