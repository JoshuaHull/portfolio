<template>
<div class="file-explorer-file">
  <IconContainer width="1em">
    <DocumentSolidIcon class="file-explorer-file-icon" />
  </IconContainer>
  <slot></slot>
</div>
</template>

<style>
.file-explorer-file {
  display: grid;
  grid-template-columns: min-content auto;
  column-gap: 0.5rem;
  align-items: center;
  padding: 0.2rem;
  border-radius: 0.5rem;
}

.file-explorer-file-icon {
  color: #00aa99aa;
}

.file-explorer-file:hover .file-explorer-file-icon,
.file-explorer-file:focus .file-explorer-file-icon,
.file-explorer-file:focus-within .file-explorer-file-icon {
  color: white;
}

.file-explorer-file:hover {
  background-color: #00aa99aa;
}
</style>
