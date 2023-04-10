import { readFileSync } from "fs";

const name = "rollup-plugin-content";
const prefix = "content:";

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
 * @returns {LoadResult | null}
 */

/**
 * @typedef Plugin
 * @property {string} name
 * @property {ResolveIdFn} resolveId
 * @property {LoadFn} load

/**
 * @returns {Plugin}
 */
export function rollupPluginContent() {
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
    load(id) {
      if (!id.startsWith(prefix))
        return null;

      const parts = id.split(":");
      const fileType = parts[1];
      const fileName = parts[2];

      return fileType.includes("@")
        ? readChunkOfFile(fileType, fileName)
        : readEntireFile(fileType, fileName);
    },
  };
}

/**
 * @param {string} fileType
 * @param {string} fileName
 * @returns {LoadResult}
 */
function readEntireFile(fileType, fileName) {
  const readFrom = `./${fileName}.${fileType}`;
  const content = readFileSync(readFrom, "utf-8");

  return {
    code: `export default ${JSON.stringify(content)}`,
    map: {
      mappings: "",
    },
  };
}

/**
 * @param {string} fileType
 * @param {string} fileName
 * @returns {LoadResult}
 */
function readChunkOfFile(fileType, fileName) {
  const [ft, selectedLines] = fileType.split("@");

  const [from, to] = selectedLines.split(",");
  const fromIdx = Number.parseInt(from) - 1;
  const toIdx = Number.parseInt(to) - 1;

  const readFrom = `./${fileName}.${ft}`;
  const content = readFileSync(readFrom, "utf-8");

  const lines = content.split("\n");

  const selectedContent = lines.slice(fromIdx, toIdx).join("\n");

  return {
    code: `export default ${JSON.stringify(selectedContent)}`,
    map: {
      mappings: "",
    },
  };
}
