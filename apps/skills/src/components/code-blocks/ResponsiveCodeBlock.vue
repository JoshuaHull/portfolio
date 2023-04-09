<template>
<div class="responsive-code-block">
  <CodeBlockForGivenLanguage
    v-if="selectedContent"
    :content="selectedContent"
    :language="language"
  />
</div>
</template>

<script setup lang="ts">
import { CodeBlockLanguage, ResponsiveCodeBlockContent } from "@code-blocks";
import { useMediaQuery } from "@vueuse/core";

interface ResponsiveCodeBlockProps {
  language: CodeBlockLanguage;
  contents: ResponsiveCodeBlockContent[];
}

const props = defineProps<ResponsiveCodeBlockProps>();
const { contents, language } = toRefs(props);

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const isMediumScreen = useMediaQuery("(min-width: 768px)");
const isSmallScreen = useMediaQuery("(min-width: 640px)");
const isTinyScreen = computed(() => !isSmallScreen.value);

const selectedContent = computed(() => {
  const screens = [isLargeScreen.value, isMediumScreen.value, isSmallScreen.value, isTinyScreen.value];
  const sizes = ["large", "medium", "small", "tiny"];

  for (let i = 0; i < screens.length; i += 1) {
    if (!screens[i])
      continue;

    for (let j = i; j < sizes.length; j += 1) {
      const content = contents.value.find(c => c.size === sizes[j]);

      if (!!content)
        return content.content;
    }
  }
});
</script>
