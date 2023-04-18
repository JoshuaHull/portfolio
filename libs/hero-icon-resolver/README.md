# hero-icon-resolver

Automatically resolves [Hero Icon](https://heroicons.com/) components in Vue apps.

## Usage

Used in combination with [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components).

```ts
// vite.config.js
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite";
import { heroIconResolver } from "hero-icon-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        heroIconResolver,
      ],
    }),
  ],
});
```

Then, from within any Vue component, reference the Hero icons without importing them.

```html
<!-- SomeComponent.vue -->
<template>
  <HeroSolidArrowUp />
</template>
```

In this example, "Arrow Up" is the name of the icon, "Solid" is the type, and "Hero" is a required prefix to prevent component resolution conflicts.

The available types are
- solid
- outline
- mini (used in combination with solid or outline)

All of the following formats are available for all icons.

| format | Solid               | Outline               | Mini Solid               | Mini Outline               |
| ------ | ------------------- | --------------------- | ------------------------ | -------------------------- |
| 1      | HeroArrowUpSolid    | HeroArrowUpOutline    | HeroArrowUpSolidMini     | HeroArrowUpOutlineMini     |
| 2      | HeroSolidArrowUp    | HeroOutlineArrowUp    | HeroSolidMiniArrowUp     | HeroOutlineMiniArrowUp     |
| 3      |                     |                       | HeroArrowUpMiniSolid     | HeroArrowUpMiniOutline     |
| 4      |                     |                       | HeroMiniSolidArrowUp     | HeroMiniOutlineArrowUp     |
| 5      | hero-arrow-up-solid | hero-arrow-up-outline | hero-arrow-up-solid-mini | hero-arrow-up-outline-mini |
| 6      | hero-solid-arrow-up | hero-outline-arrow-up | hero-solid-mini-arrow-up | hero-outline-mini-arrow-up |
| 7      |                     |                       | hero-arrow-up-mini-solid | hero-arrow-up-mini-outline |
| 8      |                     |                       | hero-mini-solid-arrow-up | hero-mini-outline-arrow-up |
