<template>
<div class="skills-messaging-drawer-content">
  <StarRating :outOf5="4">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="1">
    Personal Experience:
  </StarRating>
  <p>
    I was a high contributing member of a team which built
    a distributed payment handling system. Payments are
    processed asynchronously, transitioning state many
    times over a number of days.
  </p>
  <p>
    However, due to the complexity of distributed systems,
    I almost never use this skill in hobby projects. I simply
    don't need to.
  </p>
</div>
</template>

<style>
.skills-messaging-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
