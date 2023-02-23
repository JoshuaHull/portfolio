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
    <code>
      public class User {
      <br />
      Name: string;
      <br />
      }
    </code>
  </template>
</MultiTabbedDocument>
</template>
