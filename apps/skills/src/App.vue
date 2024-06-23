<template>
<TopNavbar />
<router-view></router-view>
</template>

<script setup lang="ts">
import { registerIconContainer } from "@fullstackjosh/web-components/IconContainer";

registerIconContainer();
</script>

<style>
.keyword {
  color: var(--code-block-keyword, blue);
}

.property {
  color: var(--code-block-property, mediumvioletred);
}

.imported-property {
  color: var(--code-block-imported-property, tomato);
}

.string {
  color: var(--code-block-string, brown);
}

.interpolated-string {
  color: var(--code-block-interpolated-string, brown);
}

.literal {
  color: var(--code-block-literal, gray);
}

.type {
  color: var(--code-block-type, seagreen);
}

.number {
  color: var(--code-block-number, dodgerblue);
}

.comment {
  color: var(--code-block-comment, limegreen);
}
</style>
