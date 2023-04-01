<template>
<div class="page">
  <header class="page-title">
    <slot name="title"></slot>
  </header>
  <div class="page-content">
    <slot></slot>
  </div>
  <nav
    v-if="nextPage || previousPage"
    class="navbar"
  >
    <NavButton
      v-if="previousPage"
      variant="left"
      :to="previousPage"
      class="nav-left"
    />
    <NavButton
      v-if="nextPage"
      variant="right"
      :to="nextPage"
      class="nav-right"
    />
  </nav>
</div>
</template>

<script setup lang="ts">
import {
  SkillsDDDPageName,
  SkillsDotnetPageName,
  SkillsFrontendPageName,
  SkillsGitPageName,
  SkillsMessagingPageName,
  SkillsRestPageName,
  SkillsTestsPageName,
} from "@routers";
import { useMediaQuery } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();
const isLargeScreen = useMediaQuery("(min-width: 1024px)");

const pageNav = computed(() => {
  const allPagesInOrder = [
    SkillsRestPageName,
    SkillsTestsPageName,
    SkillsMessagingPageName,
    SkillsDotnetPageName,
    SkillsDDDPageName,
    SkillsGitPageName,
    SkillsFrontendPageName,
  ];

  if (isLargeScreen.value)
    return allPagesInOrder;

  return allPagesInOrder.filter(p => p !== SkillsGitPageName);
});

const pageAtDelta = (delta: number) => {
  const currentPageName = router.currentRoute.value.name as string;

  if (!currentPageName)
    return null;

  const idx = pageNav.value.indexOf(currentPageName);

  if (idx < 0)
    return null;

  const target = idx + delta;

  if (target < 0 || target >= pageNav.value.length)
    return null;

  return pageNav.value[target];
}

const nextPage = computed(() => pageAtDelta(1));
const previousPage = computed(() => pageAtDelta(-1));

watchEffect(() => {
  if (isLargeScreen.value)
    return;

  // I can't figure out what the git page should look like
  // on mobile so I'm just disabling it for now.
  // It's a cool page but it's not exactly an unexpected
  // skill for developers to have.
  if (router.currentRoute.value.name === SkillsGitPageName)
    router.push({ name: pageNav.value[0] });
});

</script>

<style>
.page {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas:
    "title"
    "content"
    "navbar"
  ;
  grid-template-rows: 10rem calc(100% - 16rem) 6rem;
}

.page-title {
  grid-area: title;
  justify-self: center;
  align-self: flex-end;
  font-size: 2em;
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
  display: grid;
  grid-auto-flow: column;
  width: 100%;
}

.nav-left {
  justify-self: flex-start;
}

.nav-right {
  justify-self: flex-end;
}
</style>
