<template>
<div
  class="staged-change"
  tabindex="0"
  @dblclick="handleUnstage"
>
  <span class="staged-change-path">
    {{ simplifiedPath }}
  </span>
  <button
    class="unstage-button"
    @click="handleUnstage"
  >
    unstage
  </button>
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface StagedChangeProps {
  filePath: string;
  modification: Modification;
}

const props = defineProps<StagedChangeProps>();
const { filePath, modification } = props;

const simplifiedPath = (() => {
  const parts = filePath.split("/");

  if (parts.length <= 4)
    return filePath;

  return `/${parts[1]}/.../${parts[parts.length - 1]}`;
})();

const handleUnstage = () => {
  emit("unstage");
};

const emit = defineEmits(["unstage"]);
</script>

<style>
.staged-change {
  display: grid;
  grid-template-columns: min-content auto;
  align-items: center;
  column-gap: 2rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.staged-change:hover,
.staged-change:focus,
.staged-change:focus-within {
  background-color: #00aa99aa;
}

.staged-change:hover .unstage-button,
.staged-change:focus .unstage-button,
.staged-change:focus-within .unstage-button {
  opacity: 1;
}

.staged-change-path {
  white-space: nowrap;
}

.unstage-button {
  opacity: 0;
  width: min-content;
  justify-self: flex-end;
  cursor: pointer;
}
</style>
