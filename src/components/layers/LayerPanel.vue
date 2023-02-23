<template>
<section class="layer-panel">
  <header class="layer-panel-header">
    <slot name="title"></slot>
  </header>
  <div class="layer-panel-controls">
    <slot name="controls"></slot>
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
    "content  content"
  ;
  grid-template-rows: min-content auto;
  grid-template-columns: auto 10rem;
}

.layer-panel-header {
  grid-area: header;
  text-align: start;
}

.layer-panel-controls {
  grid-area: controls;
}

.layer-panel-content {
  grid-area: content;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
}
</style>
