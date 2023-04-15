import { defineConfig } from "vite";
import { rollupPluginHtmlMinify } from "rollup-plugin-html-minify";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    rollupPluginHtmlMinify(),
  ],
});
