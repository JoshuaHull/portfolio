<template>
<article class="skills-git">
  <FileExplorer :fileSystem="fs" />
  <CommitGraph
    :sourceControl="sourceControl"
    @commitSelected="handleCommitSelected"
  />
  <StagingArea :sourceControl="sourceControl" />
  <CommitViewer
    v-if="selectedCommit"
    :commit="selectedCommit"
  />
</article>
</template>

<script setup lang="ts">
import { FileSystem } from "@file-exploring";
import { Commit, SourceControl } from "@source-controlling";
import { Ref } from "vue";

const fs = new FileSystem();
const sc = new SourceControl(fs);
const sourceControl = ref<SourceControl>(sc) as Ref<SourceControl>;

const selectedCommit = ref<Commit | null>(null);

const handleCommitSelected = (commit: Commit) => {
  selectedCommit.value = commit;
};
</script>

<style>
.skills-git {
  display: grid;
  grid-template-columns: auto auto auto;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
