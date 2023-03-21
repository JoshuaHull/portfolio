<template>
<Page class="skills-tests-page">
  <template #title>
    Behaviour Driven Testing
  </template>
  <SkillsTestsPageContent
    v-if="isDesktop"
    class="skills-tests-page-desktop"
  />
  <SkillsTestsPageContentMobile
    v-else
    class="skills-tests-page-mobile"
  />
</Page>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

<style>
.skills-tests-page {
  --skills-tests-panel-height: 40rem;
  --code-block-keyword: goldenrod;
  --code-block-property: mediumvioletred;
  --code-block-string: yellow;
  --code-block-literal: lightgray;
}
</style>
