import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { rollupPluginContentChunks } from "rollup-plugin-content-chunks";
import { rollupPluginHandlebarsCompile } from "rollup-plugin-handlebars-compile";
// @ts-ignore - builds fine, just vs code complaining
import { registerHandlebarsHelpers } from "@fullstackjosh/web-components/_handlebars-helpers";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6174,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith("fsj-"),
        },
      },
    }),
    rollupPluginContentChunks({
      relativeTo: "./../web-components",
    }),
    rollupPluginHandlebarsCompile({
      registerHelpers: (handlebars) => registerHandlebarsHelpers(handlebars),
      relativeTo: "./../web-components",
    }),
  ],
});
