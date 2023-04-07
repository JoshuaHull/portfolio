<template>
<template v-if="isSmallScreen">
  Award Points Command
</template>
<template v-else>
  Command
</template>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isSmallScreen = useMediaQuery("(min-width: 640px)");
</script>

