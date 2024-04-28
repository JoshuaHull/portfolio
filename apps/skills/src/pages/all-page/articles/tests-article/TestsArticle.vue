<template>
<SkillsArticle class="tests-article">
  <template #title>
    Behaviour Driven Testing
  </template>
  <TestsArticleContent
    v-if="isDesktop"
    class="tests-article-desktop"
  />
  <TestsArticleContentMobile
    v-else
    class="tests-article-mobile"
  />
</SkillsArticle>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

<style>
.tests-article {
  --tests-article-panel-height: 30rem;
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
