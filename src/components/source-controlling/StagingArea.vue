<template>
<article class="staging-area">
  <div class="staging-area-controls">
    <button
      class="stage-all-button"
      @click="handleStageAll"
    >
      stage all
    </button>
    <button
      class="unstage-all-button"
      @click="handleUnstageAll"
    >
      unstage all
    </button>
  </div>
  <section class="unstaged-files">
    <header class="staging-area-files-header">
      unstaged files
    </header>
    <UnstagedChange
      v-for="unstagedChange of sc.getUnstagedChanges()"
      :filePath="unstagedChange.filePath"
      :modification="unstagedChange.modification"
    />
  </section>
  <section class="staged-files">
    <header class="staging-area-files-header">
      staged files
    </header>
    <StagedChange
      v-for="stagedChange of sc.stagedChanges"
      :filePath="stagedChange.filePath"
      :modification="stagedChange.modification"
    />
  </section>
</article>
</template>

<script setup lang="ts">
import { SourceControl } from "./source-control";

interface StagingAreaProps {
  sourceControl: SourceControl;
}

const props = defineProps<StagingAreaProps>();
const { sourceControl } = props;

const sc = ref(sourceControl);

const handleStageAll = () => {
  sc.value.stageAllChanges();
};

const handleUnstageAll = () => {
  sc.value.unstageAllChanges();
};
</script>

<style>
.staging-area {
  display: grid;
  grid-template-areas:
    "controls"
    "unstaged"
    "  staged"
  ;
  row-gap: 2rem;
}

.staging-area-controls {
  grid-area: controls;
  justify-self: flex-end;
}

.unstaged-files {
  grid-area: unstaged;
}

.staged-files {
  grid-area: staged;
}

.staging-area-files-header {
  font-size: 1.5em;
}
</style>
