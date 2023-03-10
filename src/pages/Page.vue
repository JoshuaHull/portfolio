<template>
<div class="page">
  <div class="page-content">
    <slot></slot>
  </div>
  <nav
    v-if="hasLeftNavButton || hasRightNavButton"
    class="navbar"
  >
    <router-link
      v-if="hasLeftNavButton"
      class="nav-left"
      :to="{ name: navLeftRoute! }"
    >
      {{ navLeftText }}
    </router-link>
    <router-link
      v-if="hasRightNavButton"
      class="nav-right"
      :to="{ name: navRightRoute! }"
    >
      {{ navRightText }}
    </router-link>
  </nav>
</div>
</template>

<script setup lang="ts">
interface PageProps {
  navLeftText?: string;
  navRightText?: string;
  navLeftRoute?: string;
  navRightRoute?: string;
}

const props = defineProps<PageProps>();
const {
  navLeftText,
  navRightText,
  navLeftRoute,
  navRightRoute,
} = toRefs(props);

const hasLeftNavButton = computed(() => navLeftText && navLeftRoute);
const hasRightNavButton = computed(() => navRightText && navRightRoute);
</script>

<style>
.page {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "content"
    "navbar"
  ;
  grid-template-rows: calc(100% - 2rem) 2rem;
}

.page-content {
  grid-area: content;
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
}

.navbar {
  grid-area: navbar;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
