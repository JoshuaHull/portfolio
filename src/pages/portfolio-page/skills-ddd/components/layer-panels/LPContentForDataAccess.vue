<template>
<div class="lp-content-for-data-access">
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
      <CodeBlockForCSharp content =
"public class User {
  public long Id { get; set; }
  public string Name { get; set; }
}" />
    </template>
  </MultiTabbedDocument>
  <MultiTabbedDocument
    :tabCount="2"
    :initialCurrentTab="1"
  >
    <template #tab1title>
      UML
    </template>
    <template #tab1content>
      <span>LinkedAccount</span>
      <br />
      <code>
        Id: number;
        <br />
        Type: string;
      </code>
    </template>
    <template #tab2title>
      C#
    </template>
    <template #tab2content>
      <CodeBlockForCSharp content=
"public class LinkedAccount {
  public long Id { get; set; }
  public string Type { get; set; }
  public long UserId { get; set; }
}" />
    </template>
  </MultiTabbedDocument>
</div>
</template>

<script setup lang="ts">
import { CodeBlockForCSharp } from "@code-blocks";
</script>

<style>
.lp-content-for-data-access {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
