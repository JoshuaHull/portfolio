<template #content>
<CodeBlockForCSharp content=
"public class LinkedAccount {
  public long Id { get; set; }
  public string Platform { get; set; }
  public long UserId { get; set; }
  public string ExternalId { get; set; }
}" />
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
