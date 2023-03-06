<template>
<div class="staged-change">
  {{ simplifiedPath }}
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface StagedChangeProps {
  filePath: string;
  modification: Modification;
}

const props = defineProps<StagedChangeProps>();
const { filePath, modification } = props;

const simplifiedPath = (() => {
  const parts = filePath.split("/");

  if (parts.length <= 4)
    return filePath;

  return `/${parts[1]}/.../${parts[parts.length - 1]}`;
})();

const emit = defineEmits(["unstage"]);
</script>
