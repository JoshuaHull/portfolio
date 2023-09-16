import { defineConfig } from "vite";
import { resolve } from "path";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";
import { rollupPluginPrepareDist } from "rollup-plugin-prepare-dist";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/EslintPluginBuilderLayeredArchitecture.js"),
      name: "eslintpluginbuilder-layered-architecture",
      formats: ["es", "cjs"],
      fileName: (format, _) => `index.${format === "es" ? "mjs" : "cjs"}`,
    },
  },
  plugins: [
    rollupPluginPrepareDist(),
    rollupPluginAutoPackageJson({
      packageJsonLocation: resolve(__dirname, "package.json"),
    }),
  ],
});
