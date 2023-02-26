<template>
<article class="panel-tests" ref="el">
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
        When I press the "Next" button, then we will unlock the next page.
      </template>
      <template #button>
        Next
      </template>
    </TestExample>
  </section>
</article>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null);

defineExpose({
  el,
});
</script>

<style>
.panel-tests {
  display: grid;
  place-items: center;
  align-items: center;
}

.tests-section {
  display: grid;
  grid-auto-flow: row;
  row-gap: 2rem;
  max-width: 400px;
}
</style>
