<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getMultiTabbedDocumentTemplate } from "@fullstackjosh/web-components/MultiTabbedDocumentTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  tabCount: number;
  initialCurrentTab: number;
  tabTitles: string[];
  tabContents: string[];
  variant?: "editor";
}>();

const {
  tabCount,
  initialCurrentTab,
  tabTitles,
  tabContents,
  variant,
} = toRefs(props);

const template = getMultiTabbedDocumentTemplate();
const html = computed(() => template({
  tabCount: tabCount.value,
  initialCurrentTab: initialCurrentTab.value,
  tabTitles: tabTitles.value,
  tabContents: tabContents.value,
  variant: variant.value,
}));
</script>
