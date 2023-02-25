<template>
<div class="multi-tabbed-document">
  <div class="multi-tabbed-document-tabs">
    <template v-for="n in tabCount">
      <header
        :class="`tabbed-document-header ${currentTab === n ? 'selected' : ''}`"
        @click="() => handleTabClick(n)"
      >
        <slot :name="`tab${n}title`"></slot>
      </header>
    </template>
  </div>
  <template v-for="n in tabCount">
    <article
      class="tabbed-document"
      :style="`
        z-index: ${n === currentTab ? 1 : 0};
        opacity: ${n === currentTab ? '100%' : '0%'};
      `"
    >
      <section class="tabbed-document-content">
        <slot :name="`tab${n}content`"></slot>
      </section>
    </article>
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

.tabbed-document {
  grid-area: document;
}

.tabbed-document-header {
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: darkkhaki;
  color: black;
  width: min-content;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}

.tabbed-document-header.selected {
  background-color: khaki;
}

.tabbed-document-content {
  color: black;
  background-color: khaki;
  width: fit-content;
  padding: 1rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.multi-tabbed-document-tabs {
  grid-area: tabs;
  display: flex;
  flex-direction: row;
}
</style>
