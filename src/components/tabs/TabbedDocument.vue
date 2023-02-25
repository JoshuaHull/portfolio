<template>
<article class="tabbed-document">
  <slot name="header"></slot>
  <section class="tabbed-document-content">
    <slot name="content"></slot>
  </section>
</article>
</template>

<style>
.tabbed-document-content {
  color: black;
  background-color: khaki;
  width: fit-content;
  padding: 1rem;
  border-top-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
</style>
