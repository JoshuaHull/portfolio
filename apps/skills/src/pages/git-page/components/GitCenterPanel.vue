<template>
<div class="git-center-panel">
  <header class="git-center-panel-header">
    <span>Commit Graph</span>
  </header>
  <div
    v-if="selectedCommit"
    class="closeable-commit-viewer"
  >
    <CommitViewer :commit="selectedCommit" />
    <IconButton
      class="close-commit-viewer-button"
      width="1rem"
      height="1rem"
      tabindex="0"
      @click="handleClose"
    >
      <HeroXMarkSolid />
    </IconButton>
  </div>
  <div
    v-else
    class="git-center-panel-commit-graph"
  >
    <CommitGraph
      :sourceControl="sourceControl"
      @commitSelected="handleCommitSelected"
    />
  </div>
</div>
</template>

<script setup lang="ts">
import { Commit, SourceControl } from "@source-controlling";

interface GitCenterPanelProps {
  sourceControl: SourceControl;
}

defineProps<GitCenterPanelProps>();

const selectedCommit = ref<Commit | null>(null);

const handleCommitSelected = (commit: Commit) => {
  selectedCommit.value = commit;
};

const handleClose = () => {
  selectedCommit.value = null;
};
</script>

<style>
.git-center-panel {
  height: var(--git-page-height);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-space-gray);
  padding: 1rem;
}

.git-center-panel-header {
  font-size: 1.5em;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--color-white);
  margin-bottom: 1rem;
}

.git-center-panel-commit-graph {
  max-height: var(--git-page-height);
  overflow-y: auto;
  overflow-x: hidden;
}

.closeable-commit-viewer {
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: 1rem;
  max-height: var(--git-page-height);
  overflow-y: auto;
  overflow-x: hidden;
}

.close-commit-viewer-button {
  height: min-content;
}
</style>
