<template>
<div class="star-rating">
  <slot></slot>
  <div class="stars">
    <IconContainer
      v-for="_ in stars"
      height="2rem"
      width="2rem"
      data-test="solid-star"
    >
      <HeroStarSolid />
    </IconContainer>
    <IconContainer
      v-for="_ in empties"
      height="2rem"
      width="2rem"
      data-test="outline-star"
    >
      <HeroStarOutline />
    </IconContainer>
  </div>
</div>
</template>

<script setup lang="ts">
interface StarRatingProps {
  outOf5: number;
}

const props = defineProps<StarRatingProps>();
const { outOf5 } = toRefs(props);

const stars = computed(() => {
  const rtn = [];

  for (let i = 0; i < outOf5.value; i += 1)
    rtn.push(i);

  return rtn;
});

const empties = computed(() => {
  const rtn = [];

  for (let i = 0; i < 5 - outOf5.value; i += 1)
    rtn.push(i);

  return rtn;
});
</script>

<style>
.star-rating {
  display: grid;
  grid-template-rows: auto min-content;
  row-gap: 0.5rem;
}

.stars {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.5rem;
  width: min-content;
}
</style>
