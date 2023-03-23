import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";
import { rollupPluginCount } from "rollup-plugin-count";
import { rollupPluginContent } from "rollup-plugin-content";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@code-blocks": path.resolve(__dirname, "./src/components/code-blocks"),
      "@file-exploring": path.resolve(__dirname, "./src/components/file-exploring"),
      "@query-building": path.resolve(__dirname, "./src/query-building"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@source-controlling": path.resolve(__dirname, "./src/components/source-controlling"),
      "@store": path.resolve(__dirname, "./src/store"),
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
        (componentName: string) => {
          if (componentName.endsWith("OutlineIcon"))
            return {
              name: `${componentName.slice(0, componentName.length - "OutlineIcon".length)}Icon`,
              from: "@heroicons/vue/24/outline",
            };

          else if (componentName.endsWith("SolidIcon"))
            return {
              name: `${componentName.slice(0, componentName.length - "SolidIcon".length)}Icon`,
              from: "@heroicons/vue/24/solid",
            };
        },
      ],
    }),
    rollupPluginContent(),
    rollupPluginCount(),
  ],
});
