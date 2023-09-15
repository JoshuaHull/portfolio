import { mkdir } from "fs/promises";
import { rimraf } from "rimraf";

const name = "rollup-plugin-prepare-dist";

/**
 * @type {import("./rollup-plugin-prepare-dist").rollupPluginPrepareDist}
 */
export function rollupPluginPrepareDist() {
  return {
    name,
    async buildStart() {
      await rimraf("dist");
      await mkdir("dist");
    },
  };
}
