import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";
import { rollupPluginCopy } from "rollup-plugin-copy";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";
import { rollupPluginHandlebarsCompile } from "rollup-plugin-handlebars-compile";
import { rollupPluginPrepareDist } from "rollup-plugin-prepare-dist";
import { registerHandlebarsHelpers } from "./src/_handlebars-helpers/registerHandlebarsHelpers.js";

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
        "IconContainer": resolve(__dirname, "src/IconContainer/index.js"),
        "IconContainerTemplate": resolve(__dirname, "src/IconContainerTemplate/index.js"),
        "CodeBlockForTypescript": resolve(__dirname, "src/CodeBlockForTypescript/index.js"),
        "CodeBlockForTypescriptTemplate": resolve(__dirname, "src/CodeBlockForTypescriptTemplate/index.js"),
        "CodeBlockForVue": resolve(__dirname, "src/CodeBlockForVue/index.js"),
        "CodeBlockForVueTemplate": resolve(__dirname, "src/CodeBlockForVueTemplate/index.js"),
        "CodeBlockForCSharp": resolve(__dirname, "src/CodeBlockForCSharp/index.js"),
        "CodeBlockForCSharpTemplate": resolve(__dirname, "src/CodeBlockForCSharpTemplate/index.js"),
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
    rollupPluginHandlebarsCompile({
      registerHelpers: (handlebars) => registerHandlebarsHelpers(handlebars),
    }),
  ],
});
