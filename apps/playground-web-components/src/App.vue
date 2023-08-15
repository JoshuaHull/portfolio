<template>
<fsj-foldable-panel
  checkboxId="1231"
  panelTitle="first ever web component"
  panelContent="I've always wanted to do this but never found the time."
/>
</template>

<script setup lang="ts">
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

registerFoldablePanel();
</script>

<style>
:root {
  --color-white: #E9EAECDD;
  --color-blue-gray: #333652DD;
  --color-space-gray-dark: #1B1E24DD;

  --color-fg: var(--color-space-gray-dark);
  --color-border: var(--color-white);

  background-color: var(--color-blue-gray);
  color: var(--color-white);
}
</style>
