<template>
<article class="panel-file" ref="el">
  <pre class="file-content">{{ contentWithLineNumbers }}</pre>
</article>
</template>

<script setup lang="ts">
import panelTestsContent from "content:src/pages/portfolio-page/skills-tests/components/PanelTests";

const contentWithLineNumbers = computed(() => {
  const lines = (<string>panelTestsContent).split("\n");

  let rtn = "";

  for (let i = 0; i < lines.length; i += 1) {
    const padding = ' '.repeat(`${lines.length}`.length - `${i + 1}`.length);
    rtn += `${padding}${i + 1} ${lines[i]}\n`;
  }

  return rtn;
});

const el = ref<HTMLElement | null>(null);

defineExpose({
  el,
});
</script>

<style>
.panel-file {
  overflow-x: hidden;
  overflow-y: scroll;
  height: 50%;
}
</style>
