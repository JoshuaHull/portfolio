import { defineConfig } from "vite";
import { resolve } from "path";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, "src/EslintPluginBuilderLayeredArchitecture.js"),
      name: "eslintpluginbuilder-layered-architecture",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
  /*
    rollupPluginAutoPackageJson({
      packageJsonLocation: resolve(__dirname, "package.json"),
    }),*/
  ],
});
