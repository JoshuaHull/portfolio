import { readFileSync } from "fs";

const name = "rollup-plugin-content";
const prefix = "content:";

export function rollupPluginContent(opts = {}) {
  return {
    name,
    resolveId(source: string) {
      if (!source.startsWith(prefix))
        return null;

      return {
        id: source,
        resolvedBy: name,
      };
    },
    load(id: string) {
      if (!id.startsWith(prefix))
        return null;

      const readFrom = `./${id.substring(prefix.length)}.vue`;
      const content = readFileSync(readFrom, "utf-8");

      return {
        code: `export default ${JSON.stringify(content)}`,
        map: {
          mappings: "",
        },
      };
    },
  };
}
