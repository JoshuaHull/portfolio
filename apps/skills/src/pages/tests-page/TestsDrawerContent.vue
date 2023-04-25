<template>
<div class="tests-page-drawer-content">
  <StarRating :outOf5="5">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="5">
    Personal Experience:
  </StarRating>
  <p>
    Behaviour Driven Tests avoid asserting implementation details
    as much as possible. An implementation detail might be the exact content
    of a success message, or the number of rectangles in a loading bar animation.
  </p>
  <p>
    This is the number 1 thing I have long discussions about with other developers.
    In my opinion, <em>most</em> discontent with writing tests comes from writing
    fragile implementation-driven tests.
  </p>
</div>
</template>

<style>
.tests-page-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
