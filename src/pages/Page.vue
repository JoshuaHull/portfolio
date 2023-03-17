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
    <router-link
      v-if="previousPage"
      class="nav-left"
      :to="{ name: previousPage }"
    >
      Previous Skill
    </router-link>
    <router-link
      v-if="nextPage"
      class="nav-right"
      :to="{ name: nextPage }"
    >
      Next Skill
    </router-link>
  </nav>
</div>
</template>

<script setup lang="ts">
import {
  SkillsDDDPageName,
  SkillsDotnetPageName,
  SkillsFrontendPageName,
  SkillsGitPageName,
  SkillsRestPageName,
  SkillsTestsPageName,
} from "@routers";
import { useRouter } from "vue-router";

const router = useRouter();

const pageNav = [
  SkillsTestsPageName,
  SkillsRestPageName,
  SkillsGitPageName,
  SkillsDDDPageName,
  SkillsDotnetPageName,
  SkillsFrontendPageName,
];

const pageAtDelta = (delta: number) => {
  const currentPageName = router.currentRoute.value.name as string;

  if (!currentPageName)
    return null;

  const idx = pageNav.indexOf(currentPageName);

  if (idx < 0)
    return null;

  const target = idx + delta;

  if (target < 0 || target >= pageNav.length)
    return null;

  return pageNav[target];
}

const nextPage = computed(() => pageAtDelta(1));
const previousPage = computed(() => pageAtDelta(-1));
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
  grid-template-rows: 10rem calc(100% - 12rem) 2rem;
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
