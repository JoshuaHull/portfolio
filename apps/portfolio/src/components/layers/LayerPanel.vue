<template>
<article class="layer-panel">
  <header class="layer-panel-header">
    <slot name="title"></slot>
  </header>
  <section class="layer-panel-body">
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
</article>
</template>

<script setup lang="ts">
const sidebar = ref<HTMLElement | null>(null);

const hasSidebar = computed(() => !!sidebar.value?.innerHTML);

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
  text-align: start;
  border-bottom: 2px solid white;
  padding-left: 2rem;
}

.layer-panel-body {
  display: grid;
  grid-template-columns: minmax(12rem, 22rem) auto;
  width: 100%;
  justify-self: center;
}

@media (min-width: 2048px) {
  .layer-panel-body {
    width: 60%;
  }
}

.layer-panel-sidebar {
  align-self: center;
  padding-left: 2rem;
  padding-right: 1rem;
  max-height: 30rem;
}

.layer-panel-sidebar:empty {
  display: none;
}

.layer-panel-content {
  align-self: center;
  justify-self: center;
  padding-left: 1rem;
  padding-right: 2rem;
}
</style>

<style scoped>
.layer-panel-body {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
