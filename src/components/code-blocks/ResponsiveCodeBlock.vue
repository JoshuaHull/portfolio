<template>
<div class="responsive-code-block">
  <template v-for="content in contents">
    <template v-if="content.size === 'large' && isLargeScreen">
      <CodeBlockForGivenLanguage
        :content="content.content"
        :language="language"
      />
    </template>
    <template v-else-if="content.size === 'medium' && isMediumScreen">
      <CodeBlockForGivenLanguage
        :content="content.content"
        :language="language"
      />
    </template>
    <template v-else-if="content.size === 'small' && isSmallScreen">
      <CodeBlockForGivenLanguage
        :content="content.content"
        :language="language"
      />
    </template>
  </template>
</div>
</template>

<script setup lang="ts">
import { CodeBlockLanguage, ResponsiveCodeBlockContent } from "@code-blocks";
import { useMediaQuery } from "@vueuse/core";

interface ResponsiveCodeBlockProps {
  language: CodeBlockLanguage;
  contents: ResponsiveCodeBlockContent[];
}

defineProps<ResponsiveCodeBlockProps>();

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const isMediumScreen = useMediaQuery("(min-width: 768px)");
const isSmallScreen = computed(() => !isMediumScreen.value);
</script>
