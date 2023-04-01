<template>
<div class="lp-data-access-content">
  <TabbedDocument>
    <template #title>
      <UserTitle />
    </template>
    <template #content>
      <UserContent />
    </template>
  </TabbedDocument>
  <TabbedDocument>
    <template #title>
      <LinkedAccountTitle />
    </template>
    <template #content>
      <LinkedAccountContent />
    </template>
  </TabbedDocument>
</div>
</template>

<style>
.lp-data-access-content {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  justify-content: space-between;
}
</style>
