<template>
<MultiTabbedDocument
  :tabCount="2"
  :initialCurrentTab="1"
>
  <template #tab1title>
    <TwitchUserTitle />
  </template>
  <template #tab1content>
    <TwitchUserContent />
  </template>
  <template #tab2title>
    Description
  </template>
  <template #tab2content>
    <LPDomainSidebar />
  </template>
</MultiTabbedDocument>
</template>
