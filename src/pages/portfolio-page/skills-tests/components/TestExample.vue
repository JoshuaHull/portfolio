<template>
<section
  class="test-example"
>
  <span class="description">
    <slot></slot>
  </span>
  <IconContainer width="5rem" color="green" class="check">
    <CheckCircleOutlineIcon />
  </IconContainer>
  <IconContainer height="2rem" class="bar">
    <AnimatedLoadingBar :animationDuration="animationDuration" />
  </IconContainer>
</section>
</template>

<script setup lang="ts">
interface TestExampleProps {
  animationDuration: number | null;
}

const props = defineProps<TestExampleProps>();
const { animationDuration } = toRefs(props);

watch(animationDuration, (duration => {
  console.log('saw that', duration);
}));
</script>
 
<style scoped>
.test-example {
  display: grid;
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
  justify-self: center;
}
</style>
