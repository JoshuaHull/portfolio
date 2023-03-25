import { defineConfig } from "vite";
import { vitePluginReplace } from "vite-plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginReplace({
      replace: "$skills",
      with: "http://localhost:5174/",
    }),
  ],
});
