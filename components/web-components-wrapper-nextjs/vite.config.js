import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/FoldablePanels/FoldablePanel.js"),
        "FoldablePanelClientOnly": resolve(__dirname, "src/FoldablePanels/FoldablePanelClientOnly.js"),
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
});
