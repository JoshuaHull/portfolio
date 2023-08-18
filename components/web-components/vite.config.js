import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContent } from "rollup-plugin-content";
import { rollupPluginCopy } from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/FoldablePanel/index.js"),
      },
      name: "@fullstackjosh/web-components",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}/index.${format}.js`,
    },
  },
  plugins: [
    rollupPluginContent(),
    rollupPluginCopy({
      from: resolve(__dirname, "src/*/index.d.ts"),
      to: resolve(__dirname, "dist/*/index.d.ts"),
    }),
  ],
});
