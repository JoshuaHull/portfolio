<template>
<div class="skills-article">
  <header class="article-title">
    <h2><slot name="title"></slot></h2>
  </header>
  <div class="article-content">
    <slot></slot>
  </div>
</div>
</template>

<style>
.skills-article {
  padding-top: var(--top-navbar-height);
  height: 100vh;
  width: 100%;
  z-index: 0;
}

.article-title {
  text-align: center;
  font-size: 2em;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.article-title h1 {
  font-size: 1em;
  font-weight: 400;
}

.article-content {
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
