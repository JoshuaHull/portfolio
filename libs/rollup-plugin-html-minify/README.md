# rollup-plugin-html-minify

Very simply HTML minifier.

Does not do anything fancy, just removes leading whitespace and blank lines. Not suitable for production since it cannot handle intended use of leading whitespace.

## Usage

```js
// vite.config.{ts|js}
import { defineConfig } from "vite";
import { rollupPluginHtmlMinify } from "rollup-plugin-html-minify";

export default defineConfig({
  plugins: [
    rollupPluginHtmlMinify(),
  ],
});
```
