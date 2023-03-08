<template>
<div
  class="file-explorer-folder"
  tabindex="0"
  @click="handleClick"
  @keypress.space="handleClick"
  @keypress.enter="handleClick"
>
  <IconContainer width="1em">
    <FolderSolidIcon class="file-explorer-folder-icon" />
  </IconContainer>
  <slot></slot>
</div>
</template>

<script setup lang="ts">
const emit = defineEmits(["open"]);

const handleClick = () => {
  emit("open");
};
</script>

<style>
.file-explorer-folder {
  display: grid;
  grid-template-columns: min-content auto;
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
.file-explorer-folder:focus {
  background-color: #99aa00aa;
}
</style>
