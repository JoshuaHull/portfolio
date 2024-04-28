<template>
<SkillsArticle class="ddd-article">
  <template #title>
    Domain Driven Design
  </template>
  <DDDArticleContent
    v-if="isDesktop"
    class="ddd-article-desktop"
  />
  <DDDArticleContentMobile
    v-else
    class="ddd-article-mobile"
  />
</SkillsArticle>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

<style>
.ddd-article {
  background-color: #42BD69;
}

@media (prefers-color-scheme: dark) {
  .ddd-article {
    background-color: #729E61;
  }
}

.ddd-article-content {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
