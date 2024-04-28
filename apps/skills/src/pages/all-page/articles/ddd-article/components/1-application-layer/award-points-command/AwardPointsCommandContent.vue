<template>
<ResponsiveCodeBlock
  language="csharp"
  :contents="contents"
/>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";

import tinyContent from "content:cs@5,23:src/pages/all-page/articles/ddd-article/components/1-application-layer/award-points-command/AwardPointsCommandCodeBlocks";
import smallContent from "content:cs@26,38:src/pages/all-page/articles/ddd-article/components/1-application-layer/award-points-command/AwardPointsCommandCodeBlocks";
import mediumContent from "content:cs@41,49:src/pages/all-page/articles/ddd-article/components/1-application-layer/award-points-command/AwardPointsCommandCodeBlocks";

const contents: ResponsiveCodeBlockContent[] = [
  {
    size: "tiny",
    content: tinyContent as string,
  },
  {
    size: "small",
    content: smallContent as string,
  },
  {
    size: "medium",
    content: mediumContent as string,
  },
];
</script>
