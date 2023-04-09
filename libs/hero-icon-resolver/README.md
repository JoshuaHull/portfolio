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
  <ArrowUpSolidIcon />
</template>
```

In this example, "Arrow Up" is the name of the icon and "Solid" is the type.

The available types are
- solid
- outline
- mini (used in combination with solid or outline)

All of the following formats are available for all icons.

| format | Solid               | Outline               | Mini Solid               | Mini Outline               |
| ------ | ------------------- | --------------------- | ------------------------ | -------------------------- |
| 1      | ArrowUpSolidIcon    | ArrowUpOutlineIcon    | ArrowUpSolidMiniIcon     | ArrowUpOutlineMiniIcon     |
| 2      | ArrowUpIconSolid    | ArrowUpIconOutline    | ArrowUpIconMiniSolid     | ArrowUpIconMiniOutline     |
| 3      | arrow-up-solid-icon | arrow-up-outline-icon | arrow-up-solid-mini-icon | arrow-up-outline-mini-icon |
| 4      | arrow-up-icon-solid | arrow-up-icon-outline | arrow-up-icon-mini-solid | arrow-up-icon-mini-outline |
