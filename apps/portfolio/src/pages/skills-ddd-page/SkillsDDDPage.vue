<template>
<Page>
  <template #title>
    Domain Driven Design
  </template>
  <SkillsDDDPageContent class="skills-ddd-page-desktop" />
  <SkillsDDDPageContentMobile class="skills-ddd-page-mobile" />
</Page>
</template>

<style>
.skills-ddd-page-desktop {
  display: none;
}

.skills-ddd-page-mobile {
  display: grid;
}

.skills-ddd {
  place-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

@media (min-width: 1024px) {
  .skills-ddd-page-desktop {
    display: grid;
  }

  .skills-ddd-page-mobile {
    display: none;
  }
}
</style>
