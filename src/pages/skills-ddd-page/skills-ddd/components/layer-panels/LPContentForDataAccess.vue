<template>
<div class="lp-content-for-data-access">
  <TabbedDocument>
    <template #title>
      C#
    </template>
    <template #content>
      <CodeBlockForCSharp content =
"public class User {
  public long Id { get; set; }
  public string Name { get; set; }
  public int Points { get; set; }
}" />
    </template>
  </TabbedDocument>
  <TabbedDocument>
    <template #title>
      C#
    </template>
    <template #content>
      <CodeBlockForCSharp content=
"public class LinkedAccount {
  public long Id { get; set; }
  public string Platform { get; set; }
  public long UserId { get; set; }
  public string ExternalId { get; set; }
}" />
    </template>
  </TabbedDocument>
</div>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>

<style>
.lp-content-for-data-access {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: space-between;
}
</style>
