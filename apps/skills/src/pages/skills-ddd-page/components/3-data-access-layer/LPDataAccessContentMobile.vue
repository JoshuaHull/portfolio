<template>
<MultiTabbedDocument
  :tabCount="3"
  :initialCurrentTab="1"
>
  <template #tab1title>
    <UserTitle />
  </template>
  <template #tab1content>
    <UserContent />
  </template>
  <template #tab2title>
    <LinkedAccountTitle />
  </template>
  <template #tab2content>
    <LinkedAccountContent />
  </template>
  <template #tab3title>
    Description
  </template>
  <template #tab3content>
    <LPDataAccessSidebar />
  </template>
</MultiTabbedDocument>
</template>
