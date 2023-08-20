import fs from "fs/promises";

const name = "rollup-plugin-auto-package-json";

/**
 * @typedef PluginOptions
 * @property {string} packageJsonLocation
 */

/**
 * @callback BuildEndFn
 * @returns {Promise<void>}
 */

/**
 * @function PluginFn
 * @param {PluginOptions} options
 * @property {string} name
 * @property {BuildEndFn} buildEnd
 */
export function rollupPluginAutoPackageJson({
  packageJsonLocation,
}) {
  return {
    name,
    async buildEnd() {
      const packageJson = await fs.readFile(packageJsonLocation, { encoding: "utf-8" });
      const packageObject = JSON.parse(packageJson);
      delete packageObject["devDependencies"];
      delete packageObject["scripts"];
      const newPackageJson = JSON.stringify(packageObject, undefined, 2);
      await fs.writeFile("dist/package.json", newPackageJson);
    },
  };
}
