<template>
<RestArticle />
<TestsArticle />
<MessagingArticle />
<DotnetArticle />
<DDDArticle />
<GitArticle v-if="isDesktop" /> <!-- doesn't look good enough on mobile yet -->
<FrontendArticle />
</template>

<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";

const isDesktop = useMediaQuery("(min-width: 1024px)");
</script>
