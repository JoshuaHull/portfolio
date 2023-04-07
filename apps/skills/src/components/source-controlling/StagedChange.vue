<template>
<div
  class="staged-change"
  tabindex="0"
  @dblclick="handleUnstage"
>
  <span class="staged-change-path">
    {{ filePath }}
  </span>
  <VButton
    class="unstage-button"
    @click="handleUnstage"
  >
    unstage
  </VButton>
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface StagedChangeProps {
  filePath: string;
  modification: Modification;
}

defineProps<StagedChangeProps>();

const handleUnstage = () => {
  emit("unstage");
};

const emit = defineEmits(["unstage"]);
</script>

<style>
.staged-change {
  display: grid;
  grid-template-columns: auto min-content;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.25rem;
  border-radius: 0.5rem;
}

.staged-change:hover,
.staged-change:focus,
.staged-change:focus-within {
  background-color: var(--color-teal);
}

.staged-change:hover .unstage-button,
.staged-change:focus .unstage-button,
.staged-change:focus-within .unstage-button {
  opacity: 1;
}

.staged-change-path {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.unstage-button {
  opacity: 0;
  width: min-content;
  justify-self: flex-end;
}
</style>
