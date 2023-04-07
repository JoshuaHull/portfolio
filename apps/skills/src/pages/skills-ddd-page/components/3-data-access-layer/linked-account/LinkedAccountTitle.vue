<template>
<template v-if="isSmallScreen">
  Linked Account
</template>
<template v-else>
  Account
</template>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isSmallScreen = useMediaQuery("(min-width: 640px)");
</script>
