<template #content>
<section class="tests-section">
  <TestExample variant="pass">
    <template #testName>
      When I press the "Run" button,
      then the test animation will
      play to completion.
    </template>
    <template #button>
      Run
    </template>
  </TestExample>
  <TestExample variant="fail">
    <template #testName>
      When I press the "Fail" button,
      then the test animation will
      fail to complete.
    </template>
    <template #button>
      Fail
    </template>
  </TestExample>
</section>
</template>

<style>
.tests-section {
  max-width: 400px;
  display: grid;
  align-items: center;
  height: 100%;
}

@media (min-width: 1024px) {
  .tests-section {
    border-right: 2px solid black;
  }
}
</style>
