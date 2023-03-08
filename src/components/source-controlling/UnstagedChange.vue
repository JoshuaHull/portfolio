<template>
<div
  class="unstaged-change"
  tabindex="0"
  @dblclick="handleStage"
>
  <span class="unstaged-change-path">
    {{ simplifiedPath }}
  </span>
  <button
    class="stage-button"
    @click="handleStage"
  >
    stage
  </button>
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface UnstagedChangeProps {
  filePath: string;
  modification: Modification;
}

const props = defineProps<UnstagedChangeProps>();
const { filePath, modification } = props;

const simplifiedPath = (() => {
  const parts = filePath.split("/");

  if (parts.length <= 4)
    return filePath;

  return `/${parts[1]}/.../${parts[parts.length - 1]}`;
})();

const handleStage = () => {
  emit("stage");
};

const emit = defineEmits(["stage"]);
</script>

<style>
.unstaged-change {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 2rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.unstaged-change:hover,
.unstaged-change:focus,
.unstaged-change:focus-within {
  background-color: #00aa99aa;
}

.unstaged-change:hover .stage-button,
.unstaged-change:focus .stage-button,
.unstaged-change:focus-within .stage-button {
  opacity: 1;
}

.unstaged-change-path {
  white-space: nowrap;
}

.stage-button {
  opacity: 0;
  width: min-content;
  justify-self: flex-end;
}
</style>
