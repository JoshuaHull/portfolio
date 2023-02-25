<template>
<MultiTabbedDocument
  :tabCount="1"
  :initialCurrentTab="1"
>
  <template #tab1title>
    <slot name="title"></slot>
  </template>
  <template #tab1content>
    <slot name="content"></slot>
  </template>
</MultiTabbedDocument>
</template>
