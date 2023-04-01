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
import { MultiTabbedDocumentVariant } from ".";

interface MultiTabbedDocumentProps {
  tabCount: number;
  initialCurrentTab: number;
  variant?: MultiTabbedDocumentVariant;
}

const props = defineProps<MultiTabbedDocumentProps>();
const { tabCount, variant } = toRefs(props);

const currentTab = ref(props.initialCurrentTab);

const cursor = computed(() => tabCount.value > 1 ? "pointer" : null);

const {
  backgroundColour,
  headerBackgroundColour,
  colour,
  padding,
  borderRadius,
  height,
} = computed(() => {
  if (variant?.value === "editor")
    return {
      backgroundColour: "#232830",
      headerBackgroundColour: "#383C4A",
      colour: "white",
      padding: "0",
      borderRadius: "0",
      height: "100%",
    };

  return {
    backgroundColour: "khaki",
    headerBackgroundColour: "darkkhaki",
    colour: "black",
    padding: "1rem",
    borderRadius: "0.5rem",
    height: null,
  };
}).value;

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
  padding-top: 0.25rem;
  width: min-content;
  white-space: nowrap;
}

.tabbed-document-content {
  width: fit-content;
}

.multi-tabbed-document-tabs {
  grid-area: tabs;
  display: flex;
  flex-direction: row;
}
</style>

<style scoped>
.tabbed-document-header {
  color: v-bind(colour);
  border-top-right-radius: v-bind(borderRadius);
  border-top-left-radius: v-bind(borderRadius);
  background-color: v-bind(headerBackgroundColour);
  cursor: v-bind(cursor);
}

.tabbed-document-header.selected {
  background-color: v-bind(backgroundColour);
}

.tabbed-document-content {
  background-color: v-bind(backgroundColour);
  color: v-bind(colour);
  padding: v-bind(padding);
  border-top-right-radius: v-bind(borderRadius);
  border-bottom-left-radius: v-bind(borderRadius);
  border-bottom-right-radius: v-bind(borderRadius);
  height: v-bind(height);
}
</style>
