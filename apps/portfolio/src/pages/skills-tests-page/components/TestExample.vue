<template>
<section
  class="test-example"
>
  <span class="description">
    <slot name="testName"></slot>
  </span>
  <VButton
    v-if="runState == 'before'"
    class="run-button"
    @click="handleRunClick"
  >
    <slot name="button"></slot>
  </VButton>
  <IconContainer
    v-if="variant === 'pass' && runState === 'after'"
    class="test-example-icon-container"
    width="5rem"
    color="green"
  >
    <AnimatedCheckIcon />
  </IconContainer>
  <IconContainer
    v-if="variant === 'fail' && runState === 'after'"
    class="test-example-icon-container fail"
    width="3.75rem"
    color="red"
  >
    <AnimatedCrossIcon />
  </IconContainer>
  <IconContainer height="2rem" class="bar">
    <AnimatedLoadingBar :animationDuration="animationDuration" />
  </IconContainer>
</section>
</template>

<script setup lang="ts">
interface TestExampleProps {
  variant: "pass" | "fail";
}

const props = defineProps<TestExampleProps>();
const { variant } = props;

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
    "description run"
    "bar         run"
  ;
  grid-template-columns: auto minmax(10px, 4rem);
  align-items: center;
  row-gap: 1rem;
  column-gap: 2rem;
  padding: 2rem;
  width: 100%;
}

.test-example:not(:last-of-type) {
  border-bottom: 1px solid white;
}

.test-example-icon-container {
  grid-area: run;
}

.test-example-icon-container.fail {
  padding-left: 0.75rem;
}

.description {
  grid-area: description;
}

.bar {
  grid-area: bar;
  justify-self: flex-end;
}

.run-button {
  grid-area: run;
}
</style>
