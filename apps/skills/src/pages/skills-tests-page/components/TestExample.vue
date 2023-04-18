<template>
<section class="test-example">
  <span class="description">
    <slot name="testName"></slot>
  </span>
  <Transition name="fade-out">
    <VButton
      v-if="runState == 'before'"
      class="run-button"
      @click="handleRunClick"
    >
      <slot name="button"></slot>
    </VButton>
  </Transition>
  <template v-if="variant === 'pass'">
    <Transition name="fade-in">
      <IconContainer
        v-if="runState === 'after'"
        class="test-example-icon-container"
        width="5rem"
        color="green"
      >
        <HeroAnimatedCheck />
      </IconContainer>
    </Transition>
    <IconContainer height="2rem" class="bar">
      <AnimatedLoadingBar
        data-testid="loading-bar-success"
        :animationDuration="animationDuration"
      />
    </IconContainer>
  </template>
  <template v-if="variant === 'fail'">
    <Transition name="fade-in">
      <IconContainer
        v-if="runState === 'after'"
        class="test-example-icon-container fail"
        width="3.75rem"
        color="red"
      >
        <HeroAnimatedCross />
      </IconContainer>
    </Transition>
    <IconContainer height="2rem" class="bar">
      <AnimatedLoadingBarFailing
        data-testid="loading-bar-fail"
        :animationDuration="animationDuration"
      />
    </IconContainer>
  </template>
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
  column-gap: 1rem;
  padding: 2rem;
  width: 100%;
}

@media (min-width: 640px) {
  .test-example {
    column-gap: 2rem;
  }
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

.fade-in-enter-active {
  transition: all 0.5s ease;
}

.fade-in-enter-from {
  opacity: 0;
}

.fade-out-leave-active {
  transition: all 0.3s ease;
}

.fade-out-leave-to {
  opacity: 0;
}
</style>
