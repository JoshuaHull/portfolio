<template>
<ResponsiveCodeBlock
  language="csharp"
  :contents="contents"
/>
</template>

<script setup lang="ts">
import { ResponsiveCodeBlockContent } from "@code-blocks";

import tinyContent from "content:cs@5,25:src/pages/skills-ddd-page/components/2-domain-layer/twitch-user/TwitchUserCodeBlocks";
import smallContent from "content:cs@28,41:src/pages/skills-ddd-page/components/2-domain-layer/twitch-user/TwitchUserCodeBlocks";
import mediumContent from "content:cs@44,57:src/pages/skills-ddd-page/components/2-domain-layer/twitch-user/TwitchUserCodeBlocks";

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
