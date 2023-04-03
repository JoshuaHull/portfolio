<template>
<Transition name="drawer-slide">
  <div v-if="isOpen" class="drawer">
    <IconButton
      height="2rem"
      width="2rem"
      @click="closeDrawer"
    >
      <Bars3SolidIcon />
    </IconButton>
  </div>
</Transition>
</template>

<script setup lang="ts">
interface DrawerProps {
  isOpen: boolean;
}

defineProps<DrawerProps>();

const emit = defineEmits(["closeDrawer"]);

const closeDrawer = () => emit("closeDrawer");
</script>

<style>
.drawer {
  position: absolute;
  padding: var(--top-navbar-padding);
  display: grid;
  justify-items: flex-end;
  z-index: 10;
  top: 0;
  right: 0;
  width: 16rem;
  height: calc(100vh);
  background-color: var(--color-bg);
  box-shadow: var(--color-white-dark) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

@media (prefers-color-scheme: dark) {
  .drawer {
    box-shadow: var(--color-blue-gray-dark) -6px 0px 12px -2px, rgba(0, 0, 0, 0.3) 3px 0px 7px -3px;
  }
}

.drawer-slide-enter-from {
  transform: translateX(100%);
}

.drawer-slide-leave-to {
  transform: translateX(100%);
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: all 0.3s;
}
</style>
