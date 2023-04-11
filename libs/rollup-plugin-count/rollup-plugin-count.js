import { PathScurry } from "path-scurry";

const name = "rollup-plugin-count";
const prefix = "count:";

/**
 * @typedef SourceMapInput
 * @property {string} mappings
 */

/**
 * @typedef LoadResult
 * @property {string} code - transformed code
 * @property {SourceMapInput} map - source map
 */

/**
 * @typedef ResolveIdResult
 * @property {string} id
 * @property {string} resolvedBy
 */

/**
 * @callback ResolveIdFn
 * @param {string} source
 * @returns {ResolveIdResult | null}
 */

/**
 * @callback LoadFn
 * @param {string} source
 * @returns {Promise<LoadResult>}
 */

/**
 * @typedef Plugin
 * @property {string} name
 * @property {ResolveIdFn} resolveId
 * @property {LoadFn} load

/**
 * @returns {Plugin}
 */
export function rollupPluginCount() {
  return {
    name,
    resolveId(source) {
      if (!source.startsWith(prefix))
        return null;

      return {
        id: source,
        resolvedBy: name,
      };
    },
    async load(id) {
      if (!id.startsWith(prefix))
        return null;

      let count = 0;

      const extension = id.substring(prefix.length);

      const src = `${process.cwd()}/src`;
      const pw = new PathScurry(src);

      for await (const entry of pw) {
        if (!entry.isFile())
          continue;

        if (entry.name.endsWith(extension))
          count += 1;
      }

      return {
        code: `export default ${count};`,
        map: {
          mappings: "",
        },
      };
    },
  };
}
