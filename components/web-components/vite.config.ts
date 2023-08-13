import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

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
    vue(),
    dts({
    }),
  ],
});
