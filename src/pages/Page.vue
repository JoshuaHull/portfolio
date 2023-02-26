<template>
<div class="page">
  <slot></slot>
</div>
</template>

<style>
.page {
  width: 100%;
  height: 100%;
  /* todo: remove hack */
  overflow: hidden;
}
</style>
