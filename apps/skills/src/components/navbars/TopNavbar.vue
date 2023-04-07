<template>
<nav class="top-navbar">
  <a
    aria-label="home"
    href="https://localhost:5173"
  >
    <IconContainer
      height="2rem"
      width="2rem"
    >
      <LogoIcon />
    </IconContainer>
  </a>
  <IconButton
    v-if="!isDrawerOpen"
    height="2rem"
    width="2rem"
    aria-label="open drawer"
    @click="toggleDrawer"
  >
    <Bars3SolidIcon />
  </IconButton>
  <Drawer
    :isOpen="isDrawerOpen"
    @closeDrawer="closeDrawer"
  />
</nav>
</template>

<script setup lang="ts">
const isDrawerOpen = ref(false);

const toggleDrawer = () => isDrawerOpen.value = !isDrawerOpen.value;
const closeDrawer = () => isDrawerOpen.value = false;
</script>

<style>
.top-navbar {
  --top-navbar-padding: 1rem;
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--top-navbar-height);
  background-color: var(--color-bg);
  padding: var(--top-navbar-padding);
  display: flex;
  justify-content: space-between;
  box-shadow: var(--color-white-dark) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

@media (prefers-color-scheme: dark) {
  .top-navbar {
    box-shadow: var(--color-blue-gray-dark) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}
</style>
