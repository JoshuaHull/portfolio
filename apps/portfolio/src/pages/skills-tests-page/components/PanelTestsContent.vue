<template #content>
<section class="tests-section">
  <TestExample>
    <template #testName>
      When I press the "Run" button,
      then the test animation will
      play to completion.
    </template>
    <template #button>
      Run
    </template>
    <template #icon>
      <IconContainer
        width="5rem"
        color="green"
      >
        <AnimatedCheckIcon />
      </IconContainer>
    </template>
  </TestExample>
  <TestExample>
    <template #testName>
      When I press the "Fail" button,
      then the test animation will
      fail to complete.
    </template>
    <template #button>
      Fail
    </template>
    <template #icon>
      <IconContainer
        class="panel-tests-content-cross-icon-container"
        width="3.75rem"
        color="red"
      >
        <AnimatedCrossIcon />
      </IconContainer>
    </template>
  </TestExample>
  <TestExample>
    <template #testName>
      When I press the "Next" button,
      then we will unlock the next page.
    </template>
    <template #button>
      Next
    </template>
    <template #icon>
      <IconContainer
        width="5rem"
        color="green"
      >
        <AnimatedCheckIcon />
      </IconContainer>
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

.panel-tests-content-cross-icon-container {
  padding-left: 0.75rem;
}
</style>
