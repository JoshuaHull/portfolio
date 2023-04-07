<template>
<router-link
  class="nav-button"
  :to="{ name: to }"
  tabindex="-1"
  :aria-label="variant === 'left' ? 'previous page' : 'next page'"
>
  <IconContainer
    height="4rem"
    class="nav-button-icon"
  >
    <ArrowRightSolidIcon v-if="variant === 'right'" />
    <ArrowLeftSolidIcon v-if="variant === 'left'" />
  </IconContainer>
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

.nav-button-icon {
  border-radius: 50%;
  color: var(--color-action);
  background-color: var(--color-action-bg);
  padding: 0.5rem
}

.nav-button-icon:focus {
  outline: solid var(--color-outline) 2px;
}

.nav-button-icon:hover,
.nav-button-icon:focus {
  transform: scale(125%);
}
</style>
