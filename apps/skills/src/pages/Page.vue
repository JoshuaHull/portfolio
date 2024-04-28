<template>
<main class="page">
  <div class="page-content">
    <slot></slot>
  </div>
</main>
</template>

<style>
.page {
  width: 100%;
  padding-top: var(--top-navbar-height);
}

.page-content {
  width: 100%;
}
</style>
