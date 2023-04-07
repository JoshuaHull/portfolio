<template>
<img
  v-if="isDarkMode"
  class="logo-icon"
  src="./../../assets/logo-light.png"
  alt="portfolio logo"
/>
<img
  v-else
  class="logo-icon"
  src="./../../assets/logo.png"
  alt="portfolio logo"
/>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
</script>

<style>
.logo-icon {
  width: 2rem;
  height: 2rem;
}
</style>
