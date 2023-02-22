<template>
<div class="skills-tests">
  <div class="editor">
    <div class="panels">
      <PanelTests class="left-panel" ref="panelTests" />
      <PanelFile class="right-panel" ref="panelFile" />
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
}

.editor {
  height: min-content;
}

.panels {
  display: grid;
  align-items: center;
  /* https://www.canva.com/colors/color-palettes/summer-splash/ */
}

.right-panel {
  display: none;
}

@media (min-width: 768px) {
  .editor {
    width: 740px;
    background-color: #05445E;
  }

  .panels {
    grid-template-columns: repeat(2, minmax(10px, 1fr));
  }

  .left-panel {
    border-right: 1px solid black;
    padding-right: 0.5rem;
  }

  .right-panel {
    display: block;
    border-left: 1px solid black;
    padding-left: 0.5rem;
  }
}

@media (min-width: 1024px) {
  .editor {
    width: 1000px;
  }
}
</style>
