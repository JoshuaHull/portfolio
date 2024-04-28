<template>
<div class="skills-article">
  <div class="article-content">
    <header class="article-title">
      <h2><slot name="title"></slot></h2>
    </header>
    <slot></slot>
  </div>
</div>
</template>

<style>
.skills-article {
  height: calc(100vh - var(--top-navbar-height));
  width: 100%;
  z-index: 0;
  display: grid;
  align-items: center;
  justify-items: center;
  padding-bottom: var(--top-navbar-height);
}

.article-title {
  text-align: center;
  font-size: 2em;
}

.article-title h1 {
  font-size: 1em;
  font-weight: 400;
}

.article-content {
  display: grid;
  align-items: center;
  justify-items: center;
  row-gap: 4rem;
  width: 100%;
}
</style>
