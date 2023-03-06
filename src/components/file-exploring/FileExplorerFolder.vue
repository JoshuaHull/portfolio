<template>
<div
  class="file-explorer-folder"
  tabindex="0"
  @click="handleClick"
  @keypress.space="handleClick"
  @keypress.enter="handleClick"
>
  <IconContainer width="1em">
    <FolderSolidIcon />
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

.file-explorer-folder:hover,
.file-explorer-folder:focus {
  background-color: #99aa00aa;
}
</style>
