<template>
<div class="skills-git-drawer-content">
  <StarRating :outOf5="5">
    Professional Experience:
  </StarRating>
  <StarRating :outOf5="5">
    Personal Experience:
  </StarRating>
  <p>
    Source control is essential for any developer. Nowadays I use GitKraken
    but I can whip out the terminal commands if you pass the <code>--force</code> flag.
  </p>
  <p>
    You can find the source code for this site <a href="https://github.com/JoshuaHull/portfolio" target="_blank">here</a>.
  </p>
</div>
</template>

<style>
.skills-git-drawer-content {
  padding: 1rem;
  display: grid;
  row-gap: 2rem;
  justify-items: center;
}
</style>
