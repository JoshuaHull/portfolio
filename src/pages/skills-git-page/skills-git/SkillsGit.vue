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
  --skills-git-height: 35rem;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: var(--skills-git-height);
  place-items: center;
  align-content: center;
  height: 100%;
  width: 100%;
}

@media (min-width: 64rem) {
  .skills-git {
    width: 60rem;
  }
}
</style>
