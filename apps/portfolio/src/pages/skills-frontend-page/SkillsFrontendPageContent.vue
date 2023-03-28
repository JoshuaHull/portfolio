<template>
<article class="skills-frontend">
  <section class="frontend-skills">
    <div class="frontend-skill-html">HTML</div>
    <div class="frontend-skill-css">CSS</div>
    <div class="frontend-skill-javascript">Javascript</div>
    <div class="frontend-skill-vue"
  >Vue<div class="vue-file-count">
        <IconContainer
          class="vue-file-count-arrow"
          height="2rem"
          width="2rem"
        >
          <ArrowLongUpSolidIcon />
        </IconContainer>
        This site is made up of {{ vueFileCount }} Vue components :)
      </div>
    </div>
    <div class="frontend-skill-angular">Angular</div>
    <div class="frontend-skill-react">React</div>
  </section>
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
  row-gap: 2rem;
  height: 100%;
}

.frontend-skills {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}

[class^="frontend-skill"]:not(:last-of-type)::after {
  content: "|";
  color: var(--color-text);
  position: relative;
  left: 0.5rem;
  top: -0.05rem;
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
  position: relative;
  color: #41B883;
}

.vue-file-count {
  display: grid;
  grid-template-rows: 4rem min-content;
  row-gap: 1.5rem;
  justify-items: center;
  position: absolute;
  transform: translateX(-45%);
  white-space: nowrap;
}

.vue-file-count-arrow {
  transform: scale(1, 2) translateY(40%);
}

.frontend-skill-angular {
  color: #DD0230;
}

.frontend-skill-react {
  color: #61DBFB;
}
</style>
