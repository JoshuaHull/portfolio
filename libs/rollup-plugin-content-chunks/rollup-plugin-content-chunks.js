import { readFileSync } from "fs";

const name = "rollup-plugin-content-chunks";
const prefix = "content:";

/**
 * @type {import("./rollup-plugin-content-chunks").rollupPluginContentChunks}
 */
export function rollupPluginContentChunks(options) {
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
        ? readChunkOfFile(fileType, fileName, options)
        : readEntireFile(fileType, fileName, options);
    },
  };
}

/**
 * @param {string} fileType
 * @param {string} fileName
 * @param {import("./rollup-plugin-content-chunks").ContentChunksOptions | undefined} options
 * @returns {LoadResult}
 */
function readEntireFile(fileType, fileName, options) {
  const relativeTo = options?.relativeTo ?? ".";
  const readFrom = `${relativeTo}/${fileName}.${fileType}`;
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
 * @param {import("./rollup-plugin-content-chunks").ContentChunksOptions | undefined} options
 * @returns {LoadResult}
 */
function readChunkOfFile(fileType, fileName, options) {
  const relativeTo = options?.relativeTo ?? ".";
  const fileLineSeparator = options?.fileLineSeparator ?? "\n";
  const outputLineSeparator = options?.outputLineSeparator ?? "\n";
  const [ft, selectedLines] = fileType.split("@");

  const [from, to] = selectedLines.split(",");
  const fromIdx = Number.parseInt(from) - 1;
  const toIdx = Number.parseInt(to) - 1;

  const readFrom = `${relativeTo}/${fileName}.${ft}`;
  const content = readFileSync(readFrom, "utf-8");

  const lines = content.split(fileLineSeparator);

  const selectedContent = lines.slice(fromIdx, toIdx).join(outputLineSeparator);

  return {
    code: `export default ${JSON.stringify(selectedContent)}`,
    map: {
      mappings: "",
    },
  };
}
