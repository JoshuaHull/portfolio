import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginReact from "@vitejs/plugin-react";
import vitePluginDts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/FoldablePanels/FoldablePanel.tsx"),
        "FoldablePanelClientOnly": resolve(__dirname, "src/FoldablePanels/FoldablePanelClientOnly.tsx"),
      },
      name: "@fullstackjosh/web-components-wrapper-nextjs",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "next"],
      output: {
        preserveModules: true,
        preserveModulesRoot: __dirname,
      },
    },
  },
  plugins: [
    vitePluginReact(),
    vitePluginDts({
      entryRoot: __dirname,
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
});
