<template>
<MultiTabbedDocument
  :tabCount="1"
  :initialCurrentTab="1"
  :variant="variant"
>
  <template #tab1title>
    <slot name="title"></slot>
  </template>
  <template #tab1content>
    <slot name="content"></slot>
  </template>
</MultiTabbedDocument>
</template>

<script setup lang="ts">
import { MultiTabbedDocumentVariant } from ".";

interface TabbedDocumentProps {
  variant?: MultiTabbedDocumentVariant;
}

defineProps<TabbedDocumentProps>();
</script>
