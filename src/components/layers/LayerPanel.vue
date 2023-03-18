<template>
<section class="layer-panel">
  <header class="layer-panel-header">
    <slot name="title"></slot>
  </header>
  <div
    class="layer-panel-sidebar"
    ref="sidebar"
  >
    <slot name="sidebar"></slot>
  </div>
  <div class="layer-panel-content">
    <slot name="content"></slot>
  </div>
</section>
</template>

<script setup lang="ts">
const sidebar = ref<HTMLElement | null>(null);

const hasSidebar = computed(() => !!sidebar.value?.innerHTML);

const gridTemplateAreas = computed(() =>
  hasSidebar.value
    ? `"header header" "sidebar content"`
    : `"header" "content"`
);

const gridTemplateColumns = computed(() =>
  hasSidebar.value
    ? "minmax(12rem, 22rem) auto"
    : "auto"
);

</script>

<style>
.layer-panel {
  width: 100%;
  height: 32rem;
  display: grid;
  grid-template-rows: min-content 30rem;
  border-bottom: 2px solid white;
}

.layer-panel-header {
  grid-area: header;
  text-align: start;
  border-bottom: 2px solid white;
  padding-left: 2rem;
}

.layer-panel-sidebar {
  grid-area: sidebar;
  align-self: center;
  padding-left: 2rem;
  padding-right: 1rem;
  max-height: 30rem;
}

.layer-panel-sidebar:empty {
  display: none;
}

.layer-panel-content {
  grid-area: content;
  align-self: center;
  justify-self: center;
  padding-left: 1rem;
  padding-right: 2rem;
}
</style>

<style scoped>
.layer-panel {
  grid-template-areas: v-bind(gridTemplateAreas);
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
