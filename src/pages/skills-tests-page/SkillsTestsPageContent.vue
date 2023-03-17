<template>
<div class="skills-tests">
  <PanelTests class="left-panel" />
  <PanelFile class="right-panel" />
</div>
</template>

<style>
.skills-tests {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  align-items: center;
  height: 100%;
}

.left-panel {
  justify-self: flex-end;
  height: var(--skills-tests-panel-height);
}

.right-panel {
  height: var(--skills-tests-panel-height);
}
</style>
