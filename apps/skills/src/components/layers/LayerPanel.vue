<template>
<article class="layer-panel">
  <header class="layer-panel-header">
    <div class="layer-panel-header-content">
      <slot name="title"></slot>
    </div>
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
  border-bottom: 2px solid var(--color-border);
}

.layer-panel-header {
  border-bottom: 2px solid var(--color-border);
}

.layer-panel-header-content {
  padding-left: 0.5rem;
}

@media(min-width: 768px) {
  .layer-panel-header-content {
    padding-left: 2rem;
  }
}

@media (min-width: 2048px) {
  .layer-panel-header {
    display: grid;
    justify-items: center;
  }

  .layer-panel-header-content {
    width: 60%;
  }
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
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
</style>

<style scoped>
.layer-panel-body {
  grid-template-columns: v-bind(gridTemplateColumns);
}
</style>
