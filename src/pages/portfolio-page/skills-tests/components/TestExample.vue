<template>
<section
  class="test-example"
>
  <span class="description">
    <slot name="testName"></slot>
  </span>
  <button
    v-if="runState == 'before'"
    class="run-button"
    @click="handleRunClick"
  >
    <slot name="button"></slot>
  </button>
  <IconContainer
    v-if="runState == 'after'"
    width="5rem"
    color="green"
    class="check"
  >
    <AnimatedCheckIcon />
  </IconContainer>
  <IconContainer height="2rem" class="bar">
    <AnimatedLoadingBar :animationDuration="animationDuration" />
  </IconContainer>
</section>
</template>

<script setup lang="ts">
type RunState = "before" | "during" | "after";

const animationDuration = ref<number | null>(null);
const runState = ref<RunState>("before");

function handleRunClick() {
  animationDuration.value = 3000;
  runState.value = "during";
  setTimeout(() => runState.value = "after", 3000);
}
</script>

<style>
.test-example {
  display: grid;
  grid-template-areas:
    "description check"
    "bar         check"
  ;
  grid-template-columns: auto minmax(10px, 4rem);
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
}
</style>
