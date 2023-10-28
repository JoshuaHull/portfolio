<template>
<fsj-code-block-for-csharp
  :content="content"
  :hideLineNumbers="hideLineNumbers"
/>
</template>

<script setup lang="ts">
import { registerCodeBlockForCSharp } from "@fullstackjosh/web-components/CodeBlockForCSharp";

registerCodeBlockForCSharp();

defineProps<{
  content: string;
  hideLineNumbers: boolean;
}>();
</script>
