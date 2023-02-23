<template>
<article class="skills-ddd">
  <MultiLayerPanel
    :layerCount="layerCount"
    :currentLayer="currentLayer"
  >
    <template #layer1>
      <LayerPanelApplicationLogic
        @up="handleUp"
        @down="handleDown"
      />
    </template>
    <template #layer2>
      <LayerPanelDomainLogic
        @up="handleUp"
        @down="handleDown"
      />
    </template>
    <template #layer3>
      <LayerPanelDataAccess
        @up="handleUp"
        @down="handleDown"
      />
    </template>
  </MultiLayerPanel>
</article>
</template>

<script setup lang="ts">
const currentLayer = ref(3);
const layerCount = 3;

function handleUp() {
  changeCurrentLayerBy(-1);
}

function handleDown() {
  changeCurrentLayerBy(1);
}

function changeCurrentLayerBy(increment: number) {
  const intendedLayer = currentLayer.value + increment;
  currentLayer.value = Math.max(Math.min(intendedLayer, layerCount), 1);
}
</script>

<style scoped>
.skills-ddd {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
}
</style>
