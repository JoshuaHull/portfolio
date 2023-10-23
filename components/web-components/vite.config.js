import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";
import { rollupPluginCopy } from "rollup-plugin-copy";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";
import { rollupPluginHandlebarsCompile } from "rollup-plugin-handlebars-compile";
import { rollupPluginPrepareDist } from "rollup-plugin-prepare-dist";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        "FoldablePanel": resolve(__dirname, "src/FoldablePanel/index.js"),
        "FoldablePanelTemplate": resolve(__dirname, "src/FoldablePanelTemplate/index.js"),
        "FoldableTextArea": resolve(__dirname, "src/FoldableTextArea/index.js"),
        "FoldableTextAreaTemplate": resolve(__dirname, "src/FoldableTextAreaTemplate/index.js"),
        "CodeBlockForTypescript": resolve(__dirname, "src/CodeBlockForTypescript/index.js"),
        "CodeBlockForTypescriptTemplate": resolve(__dirname, "src/CodeBlockForTypescriptTemplate/index.js"),
        "CodeBlockForVue": resolve(__dirname, "src/CodeBlockForVue/index.js"),
        "CodeBlockForVueTemplate": resolve(__dirname, "src/CodeBlockForVueTemplate/index.js"),
      },
      name: "@fullstackjosh/web-components",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}/index.${format === "es" ? "mjs" : "cjs"}`,
    },
  },
  plugins: [
    rollupPluginPrepareDist(),
    rollupPluginAutoPackageJson({
      packageJsonLocation: resolve(__dirname, "package.json"),
    }),
    rollupPluginContentChunks(),
    rollupPluginCopy({
      from: resolve(__dirname, "src/*/index.d.ts"),
      to: resolve(__dirname, "dist/*/index.d.ts"),
    }),
    rollupPluginHandlebarsCompile(),
  ],
});
