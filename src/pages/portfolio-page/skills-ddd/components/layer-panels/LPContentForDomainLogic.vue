<template>
<TabbedDocument>
  <template #title>
    C#
  </template>
  <template #content>
    <CodeBlockForCSharp content =
"public record TwitchUser {
  public long Id { get; }
  public string Name { get; }
}" />
  </template>
</TabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
