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
      v-if="n === currentTab"
      class="tabbed-document-container"
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
.multi-tabbed-document-tabs {
  display: flex;
  flex-direction: row;
}
</style>
