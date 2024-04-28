<template>
<div class="tests-article-content">
  <PanelTests class="left-panel" />
  <PanelFile class="right-panel" />
</div>
</template>

<style>
.tests-article-content {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  align-items: center;
}

.left-panel {
  justify-self: flex-end;
  height: var(--tests-article-panel-height);
}

.right-panel {
  height: var(--tests-article-panel-height);
}
</style>
