<template>
<div class="file-explorer">
  <button @click="handleAddFile">
    <IconContainer width="1.5rem">
      <DocumentPlusSolidIcon />
    </IconContainer>
  </button>
  <button @click="handleAddFolder">
    <IconContainer width="1.5rem">
      <FolderPlusSolidIcon />
    </IconContainer>
  </button>
  <button @click="handleUp">
    <IconContainer width="1.5rem">
      <ArrowUpSolidIcon />
    </IconContainer>
  </button>
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
  const up = fs.value.up();

  if (!up)
    return;

  fs.value = up;
};

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
