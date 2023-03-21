<template>
<Page>
  <template #title>
    Domain Driven Design
  </template>
  <SkillsDDDPageContent
    v-if="isDesktop"
    class="skills-ddd-page-desktop"
  />
  <SkillsDDDPageContentMobile
    v-else
    class="skills-ddd-page-mobile"
  />
</Page>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

<style>
.skills-ddd {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
