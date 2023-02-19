<template>
<article class="skills-tests">
  <section class="tests-section">
    <TestExample :animationDuration="testExample1Animation">
      When I press the "Run Tests" button,<br />
      then the tests will animate in sequence
    </TestExample>
    <TestExample :animationDuration="testExample2Animation">
      test 2
    </TestExample>
    <TestExample :animationDuration="testExample3Animation">
      test 3
    </TestExample>
    <button @click="handleClick()">
      Run Tests
    </button>
  </section>
</article>
</template>

<script setup lang="ts">
import { useAnimation } from "@store";

const [testExample1Animation, triggerTestExample1] = useAnimation("test-example-1");
const [testExample2Animation, triggerTestExample2] = useAnimation("test-example-2");
const [testExample3Animation, triggerTestExample3] = useAnimation("test-example-3");

const handleClick = () => {
  triggerTestExample1(3000);
  setTimeout(() => triggerTestExample2(3000), 3200);
  setTimeout(() => triggerTestExample3(3000), 6400);
};
</script>

<style scoped>
.skills-tests {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}

.tests-section {
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
}
</style>
