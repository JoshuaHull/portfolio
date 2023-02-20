<template>
<div class="skills-tests">
  <div class="editor">
    <div class="panels">
      <PanelTests ref="panelTests" />
      <PanelFile ref ="panelFile" />
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import PanelTests from "./components/PanelTests.vue";
import PanelFile from "./components/PanelFile.vue";

const panelTests = ref<InstanceType<typeof PanelTests> | null>(null);
const panelFile = ref<InstanceType<typeof PanelFile> | null>(null);

const desiredPanelFileHeight = computed(() => panelTests.value?.el?.clientHeight);

/*
  bit unfortunate but due to there being very few fixed heights
  in my work so far, it's difficult to correctly style the
  height of a container that has `overflow: scroll`
*/
watch (desiredPanelFileHeight, updated => {
  if (!updated)
    return;

  const el = panelFile.value?.el;

  if (!el)
    return;

  el.style.height = `${updated}px`;
});
</script>

<style>
.skills-tests {
  display: grid;
  place-items: center;
  align-items: center;
  height: 100%;
  padding: 2rem;
}

.editor {
  height: min-content;
  padding: 2rem;
  background-color: #05445E;
}

.panels {
  display: grid;
  grid-template-columns: repeat(2, minmax(10px, 1fr));
  column-gap: 1rem;
  align-items: center;
  /* https://www.canva.com/colors/color-palettes/summer-splash/ */
}
</style>
