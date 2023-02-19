<template>
<article class="skills-tests">
  <section class="tests-section">
    <TestExample>
      <template #testName>
        When I press the "Run" button, then the test animation will play to completion.
      </template>
      <template #button>
        Run
      </template>
    </TestExample>
    <TestExample>
      <template #testName>
        When I press the "Fail" button, then the test animation will fail to complete.
      </template>
      <template #button>
        Fail
      </template>
    </TestExample>
    <TestExample>
      <template #testName>
        When I press the "Next" button, then we will scroll to the next page.
      </template>
      <template #button>
        Next
      </template>
    </TestExample>
  </section>
</article>
</template>

<script setup lang="ts">
</script>

<style>
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
  max-width: 400px;
}
</style>
