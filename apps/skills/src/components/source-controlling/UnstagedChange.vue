<template>
<div
  class="unstaged-change"
  tabindex="0"
  @dblclick="handleStage"
>
  <span class="unstaged-change-path">
    {{ filePath }}
  </span>
  <VButton
    class="stage-button"
    @click="handleStage"
  >
    stage
  </VButton>
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface UnstagedChangeProps {
  filePath: string;
  modification: Modification;
}

defineProps<UnstagedChangeProps>();

const handleStage = () => {
  emit("stage");
};

const emit = defineEmits(["stage"]);
</script>

<style>
.unstaged-change {
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.unstaged-change:hover,
.unstaged-change:focus,
.unstaged-change:focus-within {
  background-color: var(--color-teal);
}

.unstaged-change:hover .stage-button,
.unstaged-change:focus .stage-button,
.unstaged-change:focus-within .stage-button {
  opacity: 1;
}

.unstaged-change-path {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stage-button {
  opacity: 0;
  width: min-content;
  justify-self: flex-end;
}
</style>
