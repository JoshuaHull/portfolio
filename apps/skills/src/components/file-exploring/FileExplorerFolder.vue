<template>
<div
  class="file-explorer-folder file-explorer-item"
  tabindex="0"
  @click="handleClick"
  @keypress.space="handleClick"
  @keypress.enter="handleClick"
>
  <IconContainer width="1em">
    <HeroFolderSolid class="file-explorer-folder-icon" />
  </IconContainer>
  <slot></slot>
  <IconButton
    width="1em"
    :rounded="true"
    @click="handleTrash"
  >
    <HeroTrashSolid class="file-explorer-trash-icon" />
  </IconButton>
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
  white-space: nowrap;
  cursor: pointer;
}

.file-explorer-folder-icon {
  color: var(--color-mustard);
}

.file-explorer-folder:hover .file-explorer-folder-icon,
.file-explorer-folder:focus .file-explorer-folder-icon,
.file-explorer-folder:focus-within .file-explorer-folder-icon {
  color: var(--color-white);
}

.file-explorer-folder:hover,
.file-explorer-folder:focus,
.file-explorer-folder:focus-within {
  background-color: var(--color-mustard);
}
</style>
