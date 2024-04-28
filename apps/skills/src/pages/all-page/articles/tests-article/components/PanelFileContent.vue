<template>
<div class="panel-file-content">
  <pre>{{ lineNumbers }}</pre>
  <CodeBlockForTypescript :content="panelTestsContent" />
</div>
</template>

<script setup lang="ts">
import panelTestsContent from "content:ts:src/pages/all-page/articles/tests-article/components/TestExample.spec";
import { CodeBlockForTypescript } from "@code-blocks";

const lineNumbers = computed(() => {
  const lines = (<string>panelTestsContent).split("\n");

  let rtn = "";

  for (let i = 0; i < lines.length; i += 1) {
    const padding = ' '.repeat(`${lines.length}`.length - `${i + 1}`.length);
    rtn += `${padding}${i + 1}\n`;
  }

  return rtn;
});
</script>

<style>
.panel-file-content {
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 1rem;
  max-width: 400px;
  padding-left: 0.5rem;
  overflow-x: scroll;
  overflow-y: scroll;
  height: calc(var(--tests-article-panel-height) - 1.75rem);
}

@media (min-width: 1024px) {
  .panel-file-content {
    max-width: min(calc(100vw - 1rem), 500px);
  }
}
</style>
