<template>
<nav
  v-if="nextPage || previousPage"
  class="bottom-navbar"
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
</template>

<script setup lang="ts">
import {
  DDDPageName,
  DotnetPageName,
  FrontendPageName,
  GitPageName,
  MessagingPageName,
  RestPageName,
  TestsPageName,
} from "@routers";
import { useMediaQuery } from "@vueuse/core";
import { useRouter } from "vue-router";

const router = useRouter();
const isLargeScreen = useMediaQuery("(min-width: 66rem)");

const pageNav = computed(() => {
  const allPagesInOrder = [
    RestPageName,
    TestsPageName,
    MessagingPageName,
    DotnetPageName,
    DDDPageName,
    GitPageName,
    FrontendPageName,
  ];

  if (isLargeScreen.value)
    return allPagesInOrder;

  return allPagesInOrder.filter(p => p !== GitPageName);
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
  if (router.currentRoute.value.name === GitPageName)
    router.push({ name: pageNav.value[0] });
});
</script>

<style>
.bottom-navbar {
  height: var(--bottom-navbar-height);
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  position: absolute;
  z-index: 10;
  bottom: 0;
  background-color: var(--color-bg-solid);
  box-shadow: var(--color-white-dark) 0px -6px 12px -2px, rgba(0, 0, 0, 0.3) 0px -3px 7px -3px;
}

@media (prefers-color-scheme: dark) {
  .bottom-navbar {
    box-shadow: var(--color-blue-gray-dark) 0px -6px 12px -2px, rgba(0, 0, 0, 0.3) 0px -3px 7px -3px;
  }
}

.nav-left {
  justify-self: flex-start;
}

.nav-right {
  justify-self: flex-end;
}
</style>
