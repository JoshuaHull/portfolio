<template>
<section class="layer-panel">
  <header class="layer-panel-header">
    <slot name="title"></slot>
  </header>
  <div class="layer-panel-controls">
    <slot name="controls"></slot>
  </div>
  <div class="layer-panel-sidebar">
    <slot name="sidebar"></slot>
  </div>
  <div class="layer-panel-content">
    <slot name="content"></slot>
  </div>
</section>
</template>

<style>
.layer-panel {
  width: 100%;
  height: 32rem;
  display: grid;
  grid-template-areas:
    " header controls"
    "sidebar  content"
  ;
  grid-template-rows: min-content 30rem;
  grid-template-columns: minmax(12rem, 22rem) auto;
  border-bottom: 2px solid white;
}

.layer-panel-header {
  grid-area: header;
  text-align: start;
  border-bottom: 2px solid white;
  padding-left: 2rem;
}

.layer-panel-controls {
  grid-area: controls;
  border-bottom: 2px solid white;
}

.layer-panel-sidebar {
  grid-area: sidebar;
  align-self: center;
  padding-left: 2rem;
  padding-right: 1rem;
  max-height: 30rem;
}

.layer-panel-content {
  grid-area: content;
  align-self: center;
  justify-self: center;
  padding-left: 1rem;
  padding-right: 2rem;
}
</style>
