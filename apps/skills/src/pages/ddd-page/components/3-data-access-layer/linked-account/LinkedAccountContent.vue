<template>
<ResponsiveCodeBlock
  language="csharp"
  :contents="contents"
/>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";

import tinyContent from "content:cs@4,11:src/pages/ddd-page/components/3-data-access-layer/linked-account/LinkedAccountCodeBlocks";
import smallContent from "content:cs@14,20:src/pages/ddd-page/components/3-data-access-layer/linked-account/LinkedAccountCodeBlocks";

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
