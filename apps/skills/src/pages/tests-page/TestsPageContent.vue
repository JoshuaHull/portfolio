<template>
<div class="tests-page-content">
  <PanelTests class="left-panel" />
  <PanelFile class="right-panel" />
</div>
</template>

<style>
.tests-page-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  align-items: center;
  height: 100%;
}

.left-panel {
  justify-self: flex-end;
  height: var(--tests-page-panel-height);
}

.right-panel {
  height: var(--tests-page-panel-height);
}
</style>
