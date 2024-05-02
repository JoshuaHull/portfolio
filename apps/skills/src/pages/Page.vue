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
  margin-top: var(--top-navbar-height);
  overflow-y: scroll;
}

.page-content {
  width: 100%;
}
</style>
