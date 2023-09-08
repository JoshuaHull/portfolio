# rollup-plugin-auto-package-json

Copies `package.json`, removes some fields, and dumps it in `dist`.

## Usage

Add the plugin to your `vite.config.{ts|js}`.

```js
// vite.config.js
import { defineConfig } from "vite";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";

export default defineConfig({
  plugins: [
    rollupPluginAutoPackageJson({
      packageJsonLocation: resolve(__dirname, "package.json"),
    }),
  ],
});
```

The use of `resolve(__dirname,` is only needed in mono-repos.
