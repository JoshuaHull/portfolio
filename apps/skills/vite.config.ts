import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
import { rollupPluginCount } from "rollup-plugin-count";
import { rollupPluginContent } from "rollup-plugin-content";
import { heroIconResolver } from "hero-icon-resolver";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/skills/",
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      "@code-blocks": path.resolve(__dirname, "./src/components/code-blocks"),
      "@file-exploring": path.resolve(__dirname, "./src/components/file-exploring"),
      "@query-building": path.resolve(__dirname, "./src/query-building"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@source-controlling": path.resolve(__dirname, "./src/components/source-controlling"),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: [
        "vue",
      ],
    }),
    Components({
      dts: true,
      dirs: [
        "./src/pages/**",
        "./src/components/**",
      ],
      resolvers: [
        heroIconResolver,
      ],
    }),
    rollupPluginContent(),
    rollupPluginCount(),
  ],
});
