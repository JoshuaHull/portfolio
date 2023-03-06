<template>
<div class="unstaged-change">
  {{ simplifiedPath }}
</div>
</template>

<script setup lang="ts">
import { Modification } from "@source-controlling";

interface UnstagedChangeProps {
  filePath: string;
  modification: Modification;
}

const props = defineProps<UnstagedChangeProps>();
const { filePath, modification } = props;

const simplifiedPath = (() => {
  const parts = filePath.split("/");

  if (parts.length <= 4)
    return filePath;

  return `/${parts[1]}/.../${parts[parts.length - 1]}`;
})();

const emit = defineEmits(["stage"]);
</script>
