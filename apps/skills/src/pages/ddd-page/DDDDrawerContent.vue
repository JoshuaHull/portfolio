<template>
<div class="ddd-page-drawer-content">
  <StarRating :outOf5="3">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="4">
    Personal Experience:
  </StarRating>
  <p>
    I apply DDD concepts and techniques any time
    we need to step away from a system's legacy code.
    DDD is famous for being slow to implement, but
    long-term it can greatly improve the quality of a
    feature. Overall, that's worth it in my opinion,
    even if your starting point is not ideal.
  </p>
</div>
</template>

<style>
.ddd-page-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
