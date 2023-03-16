<template>
<Page class="skills-tests-page">
  <SkillsTests class="skills-tests-page-desktop" />
  <SkillsTestsMobile class="skills-tests-page-mobile" />
</Page>
</template>

<style>
.skills-tests-page {
  --skills-tests-panel-height: 40rem;
  --code-block-keyword: goldenrod;
  --code-block-property: mediumvioletred;
  --code-block-string: yellow;
  --code-block-literal: lightgray;
}

.skills-tests-page-desktop {
  display: none;
}

@media (min-width: 1024px) {
  .skills-tests-page-desktop {
    display: grid;
  }

  .skills-tests-page-mobile {
    display: none;
  }
}
</style>
