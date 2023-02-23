<template>
<div class="multi-layer-panel">
  <template v-for="n in layerCount">
    <div
      v-if="n === currentLayer"
      :class="`layer-panel-container layer-${n}`"
    >
      <slot :name="`layer${n}`"></slot>
    </div>
  </template>
</div>
</template>

<script setup lang="ts">
interface MultiLayerPanelProps {
  layerCount: number;
  currentLayer: number;
}

defineProps<MultiLayerPanelProps>();
</script>

<style>
.multi-layer-panel {
  display: grid;
  grid-template-areas:
    "lp"
  ;
  width: 100%;
}

.layer-panel-container {
  grid-area: lp;
}
</style>
