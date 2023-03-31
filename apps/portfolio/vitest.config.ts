import defineViteConfig from "./vite.config";
import { defineConfig } from "vitest/config";

export default defineConfig({
  ...defineViteConfig,
  test: {
    environment: "jsdom",
  },
});
