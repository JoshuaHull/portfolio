<template>
<MultiTabbedDocument
  :tabCount="2"
  :initialCurrentTab="1"
>
  <template #tab1title>
    <AwardPointsCommandTitle />
  </template>
  <template #tab1content>
    <AwardPointsCommandContent />
  </template>
  <template #tab2title>
    Description
  </template>
  <template #tab2content>
    <LPApplicationSidebar />
  </template>
</MultiTabbedDocument>
</template>
