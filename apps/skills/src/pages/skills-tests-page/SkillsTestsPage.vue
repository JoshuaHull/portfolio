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
  --skills-tests-panel-height: 30rem;
  /* https://github.com/mturlo/intellij-spacegray */
  --code-block-keyword: #b48ead;
  --code-block-property: #b48ead;
  --code-block-imported-property: #8fa1b3;
  --code-block-string: #a3be8c;
  --code-block-interpolated-string: #a3be8c;
  --code-block-literal: #8fa1b3;
  --code-block-comment: #65737e;
  --code-block-number: #d0876e;
    overflow-x: hidden;
}
</style>
