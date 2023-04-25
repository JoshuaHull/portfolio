<template>
<div class="rest-page-drawer-content">
  <StarRating :outOf5="5">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="5">
    Personal Experience:
  </StarRating>
  <p>
    I'm using "REST API" as a catch-all for any API
    which serves JSON data. I <em>do</em> have
    professional and personal experience with RESTful APIs,
    but strictly RESTful APIs are unusual in the real world.
  </p>
</div>
</template>

<style>
.rest-page-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
