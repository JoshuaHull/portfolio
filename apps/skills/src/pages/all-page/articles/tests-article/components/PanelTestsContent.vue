<template #content>
<div class="tests-content">
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
</div>
</template>

<style>
.tests-content {
  max-width: 280px;
  width: 100%;
  display: grid;
  align-items: center;
  height: 100%;
}

@media (min-width: 640px) {
  .tests-content {
    max-width: 400px;
  }
}

@media (min-width: 1024px) {
  .tests-content {
    border-right: 2px solid black;
  }
}
</style>
