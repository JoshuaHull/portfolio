<template>
<router-link
  class="nav-button"
  :to="{ name: to }"
  tabindex="-1"
>
  <IconButton
    height="3rem"
    class="nav-button-icon-button"
  >
    <ArrowRightSolidIcon v-if="variant === 'right'" />
    <ArrowLeftSolidIcon v-if="variant === 'left'" />
  </IconButton>
</router-link>
</template>

<script setup lang="ts">
interface NavButtonProps {
  variant: "left" | "right";
  to: string;
}

defineProps<NavButtonProps>();
</script>

<style>
.nav-button {
  padding: 1rem;
}

.nav-button-icon-button {
  border-radius: 50%;
  color: var(--color-action);
  background-color: var(--color-action-bg);
  padding: 0.5rem
}
</style>
