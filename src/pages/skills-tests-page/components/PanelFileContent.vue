<template>
<CodeBlockForVue
  class="panel-file-content"
  :content="contentWithLineNumbers"
/>
</template>

<script setup lang="ts">
import panelTestsContent from "content:src/pages/skills-tests-page/components/PanelTestsContent";
import { CodeBlockForVue } from "@code-blocks";

const contentWithLineNumbers = computed(() => {
  const lines = (<string>panelTestsContent).split("\n");

  let rtn = "";

  for (let i = 0; i < lines.length; i += 1) {
    const padding = ' '.repeat(`${lines.length}`.length - `${i + 1}`.length);
    rtn += `${padding}${i + 1} ${lines[i]}\n`;
  }

  return rtn;
});
</script>

<style>
.panel-file-content {
  max-width: 500px;
  padding-left: 0.5rem;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(var(--skills-tests-panel-height) - 1.75rem);
}
</style>
