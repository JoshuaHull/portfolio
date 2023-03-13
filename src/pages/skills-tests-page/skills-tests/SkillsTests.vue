<template>
<div class="skills-tests">
  <div class="panels">
    <PanelTests class="left-panel" ref="panelTests" />
    <PanelFile class="right-panel" ref="panelFile" />
  </div>
</div>
</template>

<script setup lang="ts">
import PanelTests from "./components/PanelTests.vue";
import PanelFile from "./components/PanelFile.vue";

const panelTests = ref<InstanceType<typeof PanelTests> | null>(null);
const panelFile = ref<InstanceType<typeof PanelFile> | null>(null);
</script>

<style>
.skills-tests {
  display: grid;
  align-items: center;
  height: 100%;
  --skills-tests-panel-height: 40rem;
  --code-block-keyword: fuchsia;
  --code-block-property: mediumvioletred;
  --code-block-string: yellow;
  --code-block-literal: lightgray;
}

.panels {
  display: grid;
  grid-template-rows: min-content;
  align-items: center;
  /* https://www.canva.com/colors/color-palettes/summer-splash/ */
}

.left-panel {
  justify-self: flex-end;
}

.right-panel {
  display: none;
  height: var(--skills-tests-panel-height);
}

@media (min-width: 1024px) {
  .panels {
    width: 1000px;
  }

  .panels {
    grid-template-columns: repeat(2, minmax(10px, 1fr));
  }

  .left-panel {
    height: var(--skills-tests-panel-height);
  }

  .right-panel {
    display: block;
  }
}

@media (min-width: 1024px) {
  .panels {
    width: 1000px;
  }
}
</style>
