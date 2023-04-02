<template>
<img
  v-if="isDarkMode"
  src="./../../assets/logo-light.png"
/>
<img
  v-else
  src="./../../assets/logo.png"
/>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
</script>
