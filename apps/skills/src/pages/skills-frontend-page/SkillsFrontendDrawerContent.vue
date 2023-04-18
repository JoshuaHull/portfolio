<template>
<div class="skills-frontend-drawer-content">
  <StarRating :outOf5="4">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="5">
    Personal Experience:
  </StarRating>
  <p>
    In professional settings, I've used Angular (extensively), React, and vanilla Javascript.<br />
    In personal projects, I almost exclusively use Vue.
  </p>
  <p>
    However, I've found the best way to learn is not to focus on one framework, but to build up
    a good core of HTML, CSS, JS.
  </p>
</div>
</template>

<style>
.skills-frontend-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
