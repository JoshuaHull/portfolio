<template>
<article class="staging-area">
  <section class="unstaged-files">
    <header class="staging-area-files-header">
      <span class="staging-area-files-header-text">unstaged files</span>
      <button
        class="stage-all-button"
        @click="handleStageAll"
      >
        stage all
      </button>
    </header>
    <UnstagedChange
      v-for="{ filePath, modification } of unstagedChanges"
      :key="filePath"
      :filePath="filePath"
      :modification="modification"
      @stage="() => handleStage(filePath)"
    />
  </section>
  <section class="staged-files">
    <header class="staging-area-files-header">
      <span class="staging-area-files-header-text">staged files</span>
      <button
        class="unstage-all-button"
        @click="handleUnstageAll"
      >
        unstage all
      </button>
    </header>
    <StagedChange
      v-for="{ filePath, modification } of sourceControl.stagedChanges"
      :key="filePath"
      :filePath="filePath"
      :modification="modification"
      @unstage="() => handleUnstage(filePath)"
    />
  </section>
  <div class="staging-area-commit-controls">
    <input
      v-model="commitMessage"
      maxlength="32"
      placeholder="optional commit message"
    />
    <button
      class="commit-button"
      @click="handleCommit"
    >
      commit
    </button>
  </div>
</article>
</template>

<script setup lang="ts">
import { SourceControl } from "./source-control";

interface StagingAreaProps {
  sourceControl: SourceControl;
}

const props = defineProps<StagingAreaProps>();
const { sourceControl } = toRefs(props);

const commitMessage = ref<string | null>(null);

const unstagedChanges = computed(() => sourceControl.value.getUnstagedChanges());

const handleStageAll = () => {
  sourceControl.value.stageAllChanges();
};

const handleUnstageAll = () => {
  sourceControl.value.unstageAllChanges();
};

const handleCommit = () => {
  sourceControl.value.commit(commitMessage.value);
  commitMessage.value = null;
};

const handleStage = (filePath: string) => {
  sourceControl.value.stageChange(filePath);
};

const handleUnstage = (filePath: string) => {
  sourceControl.value.unstageChange(filePath);
};
</script>

<style>
.staging-area {
  display: grid;
  grid-template-areas:
    "unstaged"
    "  staged"
    "controls"
  ;
  row-gap: 2rem;
}

.unstaged-files {
  grid-area: unstaged;
}

.staged-files {
  grid-area: staged;
}

.staging-area-commit-controls {
  grid-area: controls;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 0.25rem;
}

@media (min-width: 768px) {
  .staging-area-commit-controls {
    grid-template-columns: auto min-content;
    column-gap: 0.25rem;
  }
}

.staging-area-files-header {
  display: grid;
  grid-template-columns: auto min-content;
  column-gap: 0.25rem;
}

.staging-area-files-header-text {
  font-size: 1.5em;
}

.stage-all-button,
.unstage-all-button {
  white-space: nowrap;
  height: min-content;
}
</style>
