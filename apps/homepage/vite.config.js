import { defineConfig } from "vite";
import { vitePluginReplace } from "vite-plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    vitePluginReplace({
      replace: "$skills",
      with: "http://localhost:5174/",
    }),
  ],
});
