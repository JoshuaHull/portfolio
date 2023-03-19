<template #content>
<CodeBlockForCSharp content =
"public class User {
  public long Id { get; set; }
  public string Name { get; set; }
  public int Points { get; set; }
}" />
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
