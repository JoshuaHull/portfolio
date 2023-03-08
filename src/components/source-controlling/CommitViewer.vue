<template>
<article class="commit-viewer">
  {{ commit.changes }}
</article>
</template>

<script setup lang="ts">
import { Commit } from "@source-controlling";

interface CommitViewerProps {
  commit: Commit
}

const props = defineProps<CommitViewerProps>();
const { commit } = toRefs(props);
</script>
