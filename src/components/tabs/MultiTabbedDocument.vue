<template>
<div class="multi-tabbed-document">
  <div class="multi-tabbed-document-tabs">
    <template v-for="n in tabCount">
      <TabbedDocumentHeader
        :isSelected="currentTab === n"
        @click="() => handleTabClick(n)"
      >
        <slot :name="`tab${n}title`"></slot>
      </TabbedDocumentHeader>
    </template>
  </div>
  <template v-for="n in tabCount">
    <TabbedDocument
      class="tabbed-document-container"
      :style="`
        z-index: ${n === currentTab ? 1 : 0};
        opacity: ${n === currentTab ? '100%' : '0%'};
      `"
    >
      <template #content>
        <slot :name="`tab${n}content`"></slot>
      </template>
    </TabbedDocument>
  </template>
</div>
</template>

<script setup lang="ts">
interface MultiTabbedDocumentProps {
  tabCount: number;
  initialCurrentTab: number;
}

const props = defineProps<MultiTabbedDocumentProps>();
const { tabCount } = toRefs(props);

const currentTab = ref(props.initialCurrentTab);

function handleTabClick(tabNumber: number) {
  currentTab.value = tabNumber;
}
</script>

<style>
.multi-tabbed-document {
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-areas:
    "tabs"
    "document"
  ;
  grid-template-rows: min-content auto;
}

.multi-tabbed-document-tabs {
  grid-area: tabs;
  display: flex;
  flex-direction: row;
}

.tabbed-document-container {
  grid-area: document;
}
</style>
