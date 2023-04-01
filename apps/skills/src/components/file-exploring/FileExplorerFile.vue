<template>
<div
  class="file-explorer-file file-explorer-item"
  tabindex="0"
>
  <IconContainer width="1em">
    <DocumentSolidIcon class="file-explorer-file-icon" />
  </IconContainer>
  <slot></slot>
  <IconButton
    width="1em"
    :rounded="true"
    @click="handleTrash"
  >
    <TrashSolidIcon class="file-explorer-trash-icon" />
  </IconButton>
</div>
</template>

<script setup lang="ts">
const emit = defineEmits(["delete"]);

const handleTrash = () => {
  emit("delete");
};
</script>

<style>
.file-explorer-file {
  display: grid;
  grid-template-columns: min-content auto min-content;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.2rem;
  border-radius: 0.5rem;
  white-space: nowrap;
}

.file-explorer-file-icon {
  color: var(--color-teal);
}

.file-explorer-file:hover .file-explorer-file-icon,
.file-explorer-file:focus .file-explorer-file-icon,
.file-explorer-file:focus-within .file-explorer-file-icon {
  color: var(--color-white);
}

.file-explorer-file:hover,
.file-explorer-file:focus,
.file-explorer-file:focus-within {
  background-color: var(--color-teal);
}
</style>
