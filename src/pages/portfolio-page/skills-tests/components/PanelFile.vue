<template>
<article class="panel-file" ref="el">
  <pre class="file-content">{{ panelTestsContent }}</pre>
</article>
</template>

<script setup lang="ts">
import panelTestsContent from "content:src/pages/portfolio-page/skills-tests/components/PanelTests";

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
