<template>
<article class="staging-area">
  <header class="staging-area-files-header">
    <span class="staging-area-files-header-text">unstaged files</span>
    <VButton
      class="stage-all-button"
      :disabled="disableStageAllButton"
      @click="handleStageAll"
    >
      stage all
    </VButton>
  </header>
  <section class="staging-area-files">
    <UnstagedChange
      v-for="{ filePath, modification } of unstagedChanges"
      :key="filePath"
      :filePath="filePath"
      :modification="modification"
      @stage="() => handleStage(filePath)"
    />
  </section>
  <header class="staging-area-files-header">
    <span class="staging-area-files-header-text">staged files</span>
    <VButton
      class="unstage-all-button"
      :disabled="disableUnstageAllButton"
      @click="handleUnstageAll"
    >
      unstage all
    </VButton>
  </header>
  <section class="staging-area-files">
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
      :class="`commit-message-input ${sourceControl.stagedChanges.length === 0 ? 'disabled' : ''}`"
      :disabled="sourceControl.stagedChanges.length === 0"
    />
    <VButton
      class="commit-button"
      :disabled="sourceControl.stagedChanges.length === 0"
      @click="handleCommit"
    >
      commit
    </VButton>
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

const disableStageAllButton = computed(() => unstagedChanges.value.length === 0);
const disableUnstageAllButton = computed(() => sourceControl.value.stagedChanges.length === 0);
</script>

<style>
.staging-area {
  display: grid;
  grid-template-columns: auto;
  --staging-area-border-gap: 0.75rem;
  width: 100%;
}

.staging-area-files {
  height: 12rem;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-bottom: var(--staging-area-border-gap);
}

.staging-area-commit-controls {
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
  align-items: center;
  column-gap: 0.25rem;
  padding-bottom: var(--staging-area-border-gap);
  margin-bottom: var(--staging-area-border-gap);
  border-bottom: 2px solid white;
}

@media (min-width: 768px) {
  .staging-area-files-header-text {
    font-size: 1.5em;
  }
}

.stage-all-button,
.unstage-all-button {
  white-space: nowrap;
  height: min-content;
  cursor: pointer;
}

.commit-message-input.disabled {
  cursor: not-allowed;
  color: gray;
}
</style>
