<template>
<nav class="top-navbar">
  <a
    aria-label="home"
    href="https://localhost:5173"
  >
    <IconContainer
      height="2rem"
      width="2rem"
    >
      <LogoIcon />
    </IconContainer>
  </a>
</nav>
</template>

<style>
.top-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: var(--top-navbar-height);
  background-color: var(--color-bg);
  padding: 1rem;
  display: grid;
  grid-template-columns: min-content auto;
  box-shadow: var(--color-white-dark) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

@media (prefers-color-scheme: dark) {
  .top-navbar {
    box-shadow: var(--color-blue-gray-dark) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
}
</style>
