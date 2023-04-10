<template>
<ResponsiveCodeBlock
  language="csharp"
  :contents="contents"
/>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";

import tinyContent from "content:cs@4,10:src/pages/skills-ddd-page/components/3-data-access-layer/user/UserCodeBlocks";
import smallContent from "content:cs@13,18:src/pages/skills-ddd-page/components/3-data-access-layer/user/UserCodeBlocks";

const contents: ResponsiveCodeBlockContent[] = [
  {
    size: "tiny",
    content: tinyContent as string,
  },
  {
    size: "small",
    content: smallContent as string,
  },
];
</script>
