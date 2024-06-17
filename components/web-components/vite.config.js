import { resolve } from "path";
import { defineConfig } from "vite";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";
import { rollupPluginCopy } from "rollup-plugin-copy";
import { rollupPluginAutoPackageJson } from "rollup-plugin-auto-package-json";
import { rollupPluginHandlebarsCompile } from "rollup-plugin-handlebars-compile";
import { rollupPluginPrepareDist } from "rollup-plugin-prepare-dist";
import { registerHandlebarsHelpers } from "./src/_handlebars-helpers/registerHandlebarsHelpers.js";

const components = [
  "ActionButton",
  "CodeBlockForCSharp",
  "CodeBlockForTypescript",
  "CodeBlockForVue",
  "FoldablePanel",
  "FoldableTextArea",
  "IconContainer",
  "MultiTabbedDocument",
];

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: components.reduce((acc, curr) => ({
        ...acc,
        [curr]: resolve(__dirname, `src/${curr}/index.js`),
        [`${curr}Template`]: resolve(__dirname, `src/${curr}Template/index.js`),
      }), {}),
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
