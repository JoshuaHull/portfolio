<template>
<MultiTabbedDocument
  :tabCount="2"
  :initialCurrentTab="1"
>
  <template #tab1title>
    UML
  </template>
  <template #tab1content>
    <span>TwitchUser</span>
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
    <CodeBlockForCSharp content =
"public record TwitchUser {
  public long Id { get; }
  public string Name { get; }
}" />
  </template>
</MultiTabbedDocument>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>
