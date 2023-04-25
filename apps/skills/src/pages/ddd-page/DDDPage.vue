<template>
<Page>
  <template #title>
    Domain Driven Design
  </template>
  <DDDPageContent
    v-if="isDesktop"
    class="ddd-page-desktop"
  />
  <DDDPageContentMobile
    v-else
    class="ddd-page-mobile"
  />
</Page>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>

<style>
.ddd-page-content {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
