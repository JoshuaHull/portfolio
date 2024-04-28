<template>
<SkillsArticle class="frontend-article">
  <template #title>
    And I do frontend
  </template>
  <FrontendArticleContent />
</SkillsArticle>
</template>

<style>
.frontend-article {
  background-color: #329ECD;
}

@media (prefers-color-scheme: dark) {
  .frontend-article {
    background-color: #61909E;
  }
}
</style>
