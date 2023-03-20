import { defineConfig } from "vite";
import { rollupPluginReplace } from "rollup-plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupPluginReplace({
      replace: "$skills",
      with: "http://localhost:5174/",
    }),
  ],
});
