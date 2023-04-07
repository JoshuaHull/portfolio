<template>
<div class="page">
  <header class="page-title">
    <slot name="title"></slot>
  </header>
  <div class="page-content">
    <slot></slot>
  </div>
</div>
</template>

<style>
.page {
  width: 100%;
  overflow: auto;
  margin-top: var(--top-navbar-height);
  margin-bottom: var(--bottom-navbar-height);
  display: grid;
  grid-template-rows: min-content auto;
  padding-bottom: 2rem;
}

.page-title {
  justify-self: center;
  align-self: flex-end;
  text-align: center;
  font-size: 2em;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.page-content {
  display: grid;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;
}
</style>
