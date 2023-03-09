<template>
<article class="skills-git">
  <FileExplorer :fileSystem="fs" />
  <SkillsGitCenterPanel :sourceControl="sourceControl" />
  <StagingArea :sourceControl="sourceControl" />
</article>
</template>

<script setup lang="ts">
import { FileSystem } from "@file-exploring";
import { SourceControl } from "@source-controlling";
import { Ref } from "vue";

const fs = new FileSystem();
const sc = new SourceControl(fs);
const sourceControl = ref<SourceControl>(sc) as Ref<SourceControl>;
</script>

<style>
.skills-git {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
