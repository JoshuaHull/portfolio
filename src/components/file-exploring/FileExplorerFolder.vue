<template>
<div
  class="file-explorer-folder file-explorer-item"
  tabindex="0"
  @click="handleClick"
  @keypress.space="handleClick"
  @keypress.enter="handleClick"
>
  <IconContainer width="1em">
    <FolderSolidIcon class="file-explorer-folder-icon" />
  </IconContainer>
  <slot></slot>
  <IconContainer
    width="1em"
    tabindex="0"
    @click="handleTrash"
    @keypress.enter="handleTrash"
    @keypress.space="handleTrash"
  >
    <TrashSolidIcon class="file-explorer-trash-icon" />
  </IconContainer>
</div>
</template>

<script setup lang="ts">
const emit = defineEmits(["open", "delete"]);

const handleClick = (event: MouseEvent | KeyboardEvent) => {
  if (event.target !== event.currentTarget)
    return;

  emit("open");
};

const handleTrash = () => {
  emit("delete");
};
</script>

<style>
.file-explorer-folder {
  display: grid;
  grid-template-columns: min-content auto min-content;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.2rem;
  border-radius: 0.5rem;
}

.file-explorer-folder-icon {
  color: #99aa00aa;
}

.file-explorer-folder:hover .file-explorer-folder-icon,
.file-explorer-folder:focus .file-explorer-folder-icon,
.file-explorer-folder:focus-within .file-explorer-folder-icon {
  color: white;
}

.file-explorer-folder:hover,
.file-explorer-folder:focus,
.file-explorer-folder:focus-within {
  background-color: #99aa00aa;
}
</style>
