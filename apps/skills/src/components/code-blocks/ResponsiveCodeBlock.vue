<template>
<div class="responsive-code-block">
  <template v-if="flipFlop">
    <CodeBlockForGivenLanguage
      v-if="selectedContent"
      :content="selectedContent"
      :language="language"
    />
  </template>
  <template v-else>
    <CodeBlockForGivenLanguage
      v-if="selectedContent"
      :content="selectedContent"
      :language="language"
    />
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

const props = defineProps<ResponsiveCodeBlockProps>();
const { contents, language } = toRefs(props);

// TODO: remove flipFlop
// Explanation: the CodeBlockForCSharp, Typescript, etc components
// are not reactive. So when we update their content, they don't
// re-render. The flipFlop variable allows us to force a re-render.
const flipFlop = ref(true);

const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const isMediumScreen = useMediaQuery("(min-width: 768px)");
const isSmallScreen = useMediaQuery("(min-width: 640px)");
const isTinyScreen = computed(() => !isSmallScreen.value);

const selectedContent = computed(() => {
  const largeContent = contents.value.find(c => c.size === "large");
  const mediumContent = contents.value.find(c => c.size === "medium");
  const smallContent = contents.value.find(c => c.size === "small");
  const tinyContent = contents.value.find(c => c.size === "tiny");

  if (isLargeScreen.value && !!largeContent) {
    flipFlop.value = !flipFlop.value;
    return largeContent.content;
  }

  if (isMediumScreen.value && !!mediumContent) {
    flipFlop.value = !flipFlop.value;
    return mediumContent.content;
  }

  if (isSmallScreen.value && !!smallContent) {
    flipFlop.value = !flipFlop.value;
    return smallContent.content;
  }

  if (isTinyScreen.value && !!tinyContent) {
    flipFlop.value = !flipFlop.value;
    return tinyContent.content;
  }
});
</script>
