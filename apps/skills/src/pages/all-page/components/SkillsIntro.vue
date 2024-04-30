<template>
<article class="skills-intro">
  <header class="skills-title">
    <h1>Hi, I'm Josh</h1>
  </header>
  <section class="skills-intro-content">
    <p>
      This is an <AnimatedInteraction /> demo of my skills
    </p>
    <p>
      The code for this site is available on <a href="https://github.com/JoshuaHull/portfolio/tree/main/apps/skills" target="_blank">GitHub</a>
    </p>
  </section>
  <IconContainer height="4rem">
    <HeroChevronDoubleDownSolid />
  </IconContainer>
</article>
</template>

<style>
.skills-intro {
  min-height: 60vh;
  width: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
  row-gap: 4rem;
  text-align: center;
  padding-top: var(--top-navbar-height);
  padding-bottom: var(--top-navbar-height);
}

.skills-title {
  font-size: 1.75em;
}

@media (min-width: 640px) {
  .skills-title {
    font-size: 3em;
  }
}

.skills-intro-content {
  display: grid;
  row-gap: 1rem;
}
</style>
