<template>
<div class="multi-layer-panel">
  <template v-for="n in layerCount">
    <Transition :name="`layer-slide-${slideDirection}`">
      <LayerPanel
        v-show="n === currentLayer"
        :class="`layer-panel-container layer-${n}`"
      >
        <template #title>
          <slot :name="`layer${n}title`"></slot>
        </template>
        <template #sidebar>
          <slot :name="`layer${n}sidebar`"></slot>
        </template>
        <template #content>
          <slot :name="`layer${n}content`"></slot>
        </template>
      </LayerPanel>
    </Transition>
  </template>
  <div class="buttons-container">
    <IconButton
      height="2rem"
      :rounded="true"
      :disabled="disableSlideUp"
      aria-label="move up 1 layer"
      @click="handleUp"
    >
      <HeroArrowLongUpSolid />
    </IconButton>
    <IconButton
      height="2rem"
      :rounded="true"
      :disabled="disableSlideDown"
      aria-label="move down 1 layer"
      @click="handleDown"
    >
      <HeroArrowLongDownSolid />
    </IconButton>
  </div>
</div>
</template>

<script setup lang="ts">
interface MultiLayerPanelProps {
  layerCount: number;
  initialCurrentLayer: number;
}

type SlideDirection = "up" | "down";

const props = defineProps<MultiLayerPanelProps>();
const { layerCount } = toRefs(props);

const currentLayer = ref(props.initialCurrentLayer);
const slideDirection = ref<SlideDirection>("up");
const disableSlideUp = computed(() => currentLayer.value === 1);
const disableSlideDown = computed(() => currentLayer.value === layerCount.value);

function handleUp() {
  slideDirection.value = "up";
  changeCurrentLayerBy(-1);
}

function handleDown() {
  slideDirection.value = "down";
  changeCurrentLayerBy(1);
}

function changeCurrentLayerBy(increment: number) {
  const intendedLayer = currentLayer.value + increment;
  currentLayer.value = Math.max(Math.min(intendedLayer, layerCount.value), 1);
}
</script>

<style>
.multi-layer-panel {
  display: grid;
  grid-template-areas:
    "  panel"
    "buttons"
  ;
  width: 100%;
  overflow-y: hidden;
}

.layer-panel-container {
  grid-area: panel;
}

.buttons-container {
  grid-area: buttons;
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  padding: 1rem;
}

.layer-slide-up-enter-active,
.layer-slide-up-leave-active {
  transition: transform 0.6s ease, opacity 0.3s ease;
}

.layer-slide-down-enter-active,
.layer-slide-down-leave-active {
  transition: transform 0.6s ease, opacity 0.3s ease;
}

.layer-slide-up-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}

.layer-slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.layer-slide-down-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.layer-slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
