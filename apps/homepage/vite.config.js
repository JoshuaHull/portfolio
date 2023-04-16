import { defineConfig } from "vite";
import { rollupPluginHtmlMinify } from "rollup-plugin-html-minify";

const warn = console.warn;

console.warn = (message, params) => {
  if (message.includes(`Generated an empty chunk: "index"`))
    return;

  warn(message, params);
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    rollupPluginHtmlMinify(),
  ],
});
