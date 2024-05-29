<template>
<div :innerHTML="html">
</div>
</template>

<script setup lang="ts">
import { getIconContainerTemplate } from "@fullstackjosh/web-components/IconContainerTemplate";
import { computed, toRefs } from "vue";

const props = defineProps<{
  height?: string;
  width?: string;
  color?: string;
}>();

const { height, width, color } = toRefs(props);

const template = getIconContainerTemplate();
const html = computed(() => template({
  height: height?.value,
  width: width?.value,
  color: color?.value,
}));
</script>
