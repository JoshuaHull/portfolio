<template>
<article class="skills-frontend">
  <VCard class="skills-frontend-card">
    <p class="frontend-skills">
      <span class="frontend-skill-html">HTML</span>
      <span class="frontend-skill-css">CSS</span>
      <span class="frontend-skill-javascript">Javascript</span>
      <span class="frontend-skill-vue">Vue</span>
      <span class="frontend-skill-angular">Angular</span>
      <span class="frontend-skill-react">React</span>
    </p>
    <p class="vue-file-count">
      This site is made up of {{ vueFileCount }} Vue components :)
    </p>
  </VCard>
</article>
</template>

<script setup lang="ts">
import vueFileCount from "count:vue";
</script>

<style>
.skills-frontend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.skills-frontend-card {
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  justify-items: center;
}

.frontend-skills {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

[class^="frontend-skill-"]:not(:last-of-type)::after {
  content: "|";
  color: var(--color-card-text);
  position: relative;
  left: 0.5rem;
  top: -0.05rem;
  display: inline-block;
}

.frontend-skill-html {
  color: #FF5722;
}

.frontend-skill-css {
  color: #004CE8;
}

.frontend-skill-javascript {
  color: #FFDF00;
}

.frontend-skill-vue {
  color: #41B883;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.frontend-skill-angular {
  color: #DD0230;
}

.frontend-skill-react {
  color: #61DBFB;
}

.vue-file-count {
  color: #41B883;
}
</style>
