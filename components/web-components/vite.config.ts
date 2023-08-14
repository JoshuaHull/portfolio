import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { rollupPluginContent } from "rollup-plugin-content";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/foldables/FoldablePanel.ts"),
      },
      name: "@fullstackjosh/web-components",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
  },
  plugins: [
    dts(),
    rollupPluginContent(),
  ],
});
