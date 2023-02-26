<template>
<article class="skills-frontend">
  <p>
    And I do frontend
  </p>
  <section class="frontend-skills">
    <span class="frontend-skill-html">HTML</span>
    <span class="frontend-skill-css">CSS</span>
    <span class="frontend-skill-javascript">Javascript</span>
    <span class="frontend-skill-vue">Vue</span>
    <span class="frontend-skill-angular">Angular</span>
    <span class="frontend-skill-react">React</span>
  </section>
</article>
</template>

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
  color: white;
  position: relative;
  left: 0.5rem;
  top: -0.05rem;
}

.frontend-skill-html {
  color: #FF5722
}

.frontend-skill-css {
  color: #004CE8
}

.frontend-skill-javascript {
  color: #FFDF00
}

.frontend-skill-vue {
  color: #41B883
}

.frontend-skill-angular {
  color: #DD0230;
}

.frontend-skill-react {
  color: #61DBFB;
}
</style>
