<template>
<MultiTabbedDocument
  :tabCount="2"
  :initialCurrentTab="1"
  variant="editor"
>
  <template #tab1title>
    <PanelTestsTitle />
  </template>
  <template #tab1content>
    <PanelTestsContent />
  </template>
  <template #tab2title>
    <PanelFileTitle />
  </template>
  <template #tab2content>
    <PanelFileContent />
  </template>
</MultiTabbedDocument>
</template>
