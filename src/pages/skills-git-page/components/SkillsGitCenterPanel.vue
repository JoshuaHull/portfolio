<template>
<div class="skills-git-center-panel">
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
      <XMarkSolidIcon />
    </IconButton>
  </div>
  <div
    v-else
    class="skills-git-center-panel-commit-graph"
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

interface SkillsGitCenterPanelProps {
  sourceControl: SourceControl;
}

defineProps<SkillsGitCenterPanelProps>();

const selectedCommit = ref<Commit | null>(null);

const handleCommitSelected = (commit: Commit) => {
  selectedCommit.value = commit;
};

const handleClose = () => {
  selectedCommit.value = null;
};
</script>

<style>
.skills-git-center-panel {
  height: var(--skills-git-height);
  width: 100%;
  display: grid;
  grid-template-rows: min-content;
  align-content: flex-end;
  justify-content: center;
}

.skills-git-center-panel-commit-graph {
  max-height: var(--skills-git-height);
  overflow-y: auto;
  overflow-x: hidden;
}

.closeable-commit-viewer {
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: 1rem;
  max-height: var(--skills-git-height);
  overflow-y: auto;
  overflow-x: hidden;
}

.close-commit-viewer-button {
  height: min-content;
}
</style>
