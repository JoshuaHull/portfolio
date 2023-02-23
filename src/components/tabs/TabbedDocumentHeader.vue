<template>
<header :class="`tabbed-document-header ${isSelected ? 'selected' : ''}`">
  <slot></slot>
</header>
</template>

<script setup lang="ts">
interface TabbedDocumentHeaderProps {
  isSelected?: boolean;
}

defineProps<TabbedDocumentHeaderProps>();
</script>

<style>
.tabbed-document-header {
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: darkkhaki;
  color: black;
  width: min-content;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}

.tabbed-document-header.selected {
  background-color: khaki;
}
</style>
