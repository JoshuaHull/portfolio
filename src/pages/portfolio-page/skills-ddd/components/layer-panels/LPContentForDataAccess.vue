<template>
<MultiTabbedDocument
  :tabCount="2"
  :initialCurrentTab="1"
>
  <template #tab1title>
    UML
  </template>
  <template #tab1content>
    <span>User</span>
    <br />
    <code>
      Id: number;
      <br />
      Name: string;
    </code>
  </template>
  <template #tab2title>
    C#
  </template>
  <template #tab2content>
    <CodeBlockForCSharp content=
"public class User {
  public long Id { get; set; }
  public string Name { get; set; }
}" />
  </template>
</MultiTabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>

<style>
.keyword {
  color: blue;
}

.literal {
  color: gray;
}
</style>
