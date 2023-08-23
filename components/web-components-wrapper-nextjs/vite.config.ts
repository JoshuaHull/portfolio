import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginDts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/FoldablePanels/FoldablePanel.ts"),
        "FoldablePanelClientOnly": resolve(__dirname, "src/FoldablePanels/FoldablePanelClientOnly.ts"),
      },
      name: "@fullstackjosh/web-components-wrapper-nextjs",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "next"],
      output: {
        preserveModules: true,
        preserveModulesRoot: __dirname,
      },
    },
  },
  plugins: [
    vitePluginDts({
      entryRoot: __dirname,
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
});
