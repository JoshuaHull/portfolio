<template>
<template v-if="isSmallScreen">
  TestExample.spec.ts
</template>
<template v-else>
  TestEx.spec.ts
</template>
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isSmallScreen = useMediaQuery("(min-width: 640px)");
</script>
