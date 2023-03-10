<template>
<div class="file-explorer">
  <div class="file-explorer-controls">
    <IconContainer
      class="file-explorer-action-button add-file-button"
      width="1.5rem"
      tabindex="0"
      @click="handleAddFile"
      @keypress.enter="handleAddFile"
      @keypress.space="handleAddFile"
    >
      <DocumentPlusSolidIcon />
    </IconContainer>
    <IconContainer
      class="file-explorer-action-button add-folder-button"
      width="1.5rem"
      tabindex="0"
      @click="handleAddFolder"
      @keypress.enter="handleAddFolder"
      @keypress.space="handleAddFolder"
    >
      <FolderPlusSolidIcon />
    </IconContainer>
    <IconContainer
      :class="`file-explorer-action-button up-folder-button ${hasParentFolder ? '' : 'disabled'}`"
      width="1.5rem"
      :tabindex="hasParentFolder ? 0 : -1"
      @click="handleUp"
      @keypress.enter="handleUp"
      @keypress.space="handleUp"
    >
      <ArrowUpSolidIcon />
    </IconContainer>
  </div>
  <div class="file-explorer-content">
    <FileExplorerFolder
      v-for="folder in fs.folderNames"
      @open="() => selectFolder(folder)"
      @delete="() => deleteFolder(folder)"
    >
      {{ folder }}
    </FileExplorerFolder>
    <FileExplorerFile
      v-for="file in fs.files"
      @delete="() => deleteFile(file)"
    >
      {{ file }}
    </FileExplorerFile>
  </div>
</div>
</template>

<script setup lang="ts">
import { FileSystem } from "./file-system";

interface FileExplorerProps {
  fileSystem: FileSystem,
}

const props = defineProps<FileExplorerProps>();
const { fileSystem } = props;

const fs = ref(fileSystem);

const handleAddFile = () => {
  fs.value.addFile();
};

const handleAddFolder = () => {
  fs.value.addFolder();
};

const handleUp = () => {
  if (!fs.value.hasParentFolder())
    return;

  fs.value = fs.value.up()!;
};

const hasParentFolder = computed(() => fs.value.hasParentFolder());

const selectFolder = (folderName: string) => {
  fs.value = fs.value.folders[folderName];
};

const deleteFolder = (folderName: string) => {
  fs.value.deleteFolder(folderName);
};

const deleteFile = (filePath: string) => {
  fs.value.deleteFile(filePath);
};
</script>

<style>
.file-explorer {
  height: 100%;
  --file-explorer-header-height: 2.5rem;
}

.file-explorer-content {
  overflow-y: scroll;
  overflow-x: none;
  max-height: calc(100% - var(--file-explorer-header-height));
}

.file-explorer-controls {
  display: grid;
  grid-template-columns: min-content min-content auto;
  column-gap: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid white;
}

.file-explorer-action-button {
  cursor: pointer;
}

.file-explorer-action-button:hover,
.file-explorer-action-button:focus {
  transform: scale(125%);
}

.up-folder-button {
  justify-self: flex-end;
}

.up-folder-button.disabled {
  color: gray;
  cursor: not-allowed;
}

.up-folder-button.disabled:hover,
.up-folder-button.disabled:focus {
  transform: initial;
}

.file-explorer-trash-icon {
  opacity: 0;
  color: red;
  cursor: pointer;
}
  
.file-explorer-item-icon:hover,
.file-explorer-item-icon:focus {
  transform: scale(125%);
}

.file-explorer-item:hover .file-explorer-trash-icon,
.file-explorer-item:focus .file-explorer-trash-icon,
.file-explorer-item:focus-within .file-explorer-trash-icon {
  opacity: 1;
}
</style>
