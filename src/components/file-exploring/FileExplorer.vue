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
  >
    {{ folder }}
  </FileExplorerFolder>
  <FileExplorerFile v-for="file in fs.files">
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
</script>
