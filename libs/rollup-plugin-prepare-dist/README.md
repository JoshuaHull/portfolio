# rollup-plugin-prepare-dist

Simply deletes and re-creates the `dist` folder. Helps keep all build steps contained to `vite.config.js` instead of having `rimraf dist && vite build` in your `package.json`.

## Usage

Add the plugin to your `vite.config.{ts|js}`. And you probably want it to run first.

```js
// vite.config.js
import { defineConfig } from "vite";
import { rollupPluginPrepareDist } from "rollup-plugin-prepare-dist";

export default defineConfig({
  plugins: [
    rollupPluginPrepareDist(),
    // other plugins here
  ],
});
```
