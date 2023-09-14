import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: {
        "*": resolve(__dirname, "src/EslintPluginBuilderLayeredArchitecture.ts"),
      },
      name: "eslintpluginbuilder-layered-architecture",
      formats: ["es", "cjs"],
    },
  },
});
