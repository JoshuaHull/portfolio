<template>
<template v-if="language === 'csharp'">
  <CodeBlockForCSharp :content="content" />
</template>
<template v-else-if="language === 'vue'">
  <CodeBlockForVue :content="content" />
</template>
</template>

<script setup lang="ts">
import {
  CodeBlockLanguage,
  CodeBlockForCSharp,
  CodeBlockForVue,
} from "@code-blocks";

interface CodeBlockForGivenLanguageProps {
  content: string;
  language: CodeBlockLanguage;
}

defineProps<CodeBlockForGivenLanguageProps>();
</script>
