<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getFoldablePanelTemplate } from "@fullstackjosh/web-components/FoldablePanelTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  checkboxId: string;
  panelTitle: string;
  panelContent: string;
  defaultChecked: boolean;
}>();

const { checkboxId, panelContent, panelTitle, defaultChecked } = toRefs(props);

const template = getFoldablePanelTemplate();
const html = computed(() => template({
  checkboxId: checkboxId.value,
  panelTitle: panelTitle.value,
  panelContent: panelContent.value,
  defaultChecked: defaultChecked.value,
}));
</script>
