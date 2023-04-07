<template>
<article class="commit-viewer">
  <template
    v-for="change of commit.changes"
  >
    <IconContainer
      v-if="change.modification === 'Create'"
      class="change-indicator-created"
      width="1rem"
    >
      <PlusSolidIcon />
    </IconContainer>
    <IconContainer
      v-if="change.modification === 'Delete'"
      class="change-indicator-deleted"
      width="1rem"
    >
      <MinusSolidIcon />
    </IconContainer>
    <span class="commit-viewer-file-path">{{ change.filePath }}</span>
  </template>
</article>
</template>

<script setup lang="ts">
import { Commit } from "@source-controlling";

interface CommitViewerProps {
  commit: Commit
}

const props = defineProps<CommitViewerProps>();
const { commit } = toRefs(props);
</script>

<style>
.commit-viewer {
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 0.5rem;
  align-items: center;
  height: min-content;
  white-space: nowrap;
  width: 100%;
}

.change-indicator-created {
  color: var(--color-action-create);
}

.change-indicator-deleted {
  color: var(--color-action-delete);
}

.commit-viewer-file-path {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
