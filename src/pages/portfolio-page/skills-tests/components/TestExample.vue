<template>
<section
  class="test-example"
>
  <span class="description">
    <slot name="testName"></slot>
  </span>
  <button class="run-button" @click="handleRunClick">
    <slot name="button"></slot>
  </button>
  <IconContainer width="5rem" color="green" class="check">
    <CheckCircleOutlineIcon />
  </IconContainer>
  <IconContainer height="2rem" class="bar">
    <AnimatedLoadingBar :animationDuration="animationDuration" />
  </IconContainer>
</section>
</template>

<script setup lang="ts">
const animationDuration = ref<number | null>(null);
const runButtonOpacity = ref("100%");
const checkIconOpacity = ref("0%");

function handleRunClick() {
  runButtonOpacity.value = "0%";
  animationDuration.value = 3000;
  setTimeout(() => checkIconOpacity.value = "100%", 3000);
}
</script>

<style>
.test-example {
  display: grid;
  position: relative;
  z-index: 0;
  grid-template-areas:
    "description check"
    "bar         check"
  ;
  grid-template-columns: auto min-content;
  align-items: center;
  row-gap: 1rem;
  column-gap: 2rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  background-color: black;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 0.5rem;
}

.check {
  grid-area: check;
}

.description {
  grid-area: description;
}

.bar {
  grid-area: bar;
  justify-self: flex-end;
}

.run-button {
  grid-area: check;
  z-index: 1;
}
</style>

<style scoped>
.run-button {
  opacity: v-bind(runButtonOpacity);
}

.check {
  opacity: v-bind(checkIconOpacity);
}
</style>
 