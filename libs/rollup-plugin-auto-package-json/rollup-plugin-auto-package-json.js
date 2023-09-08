import fs from "fs/promises";

const name = "rollup-plugin-auto-package-json";

/**
 * @type {import("./rollup-plugin-auto-package-json").rollupPluginAutoPackageJson}
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
