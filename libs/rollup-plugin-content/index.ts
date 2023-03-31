import { readFileSync } from "fs";

const name = "rollup-plugin-content";
const prefix = "content:";

export function rollupPluginContent() {
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

      const parts = id.split(":");
      const fileType = parts[1];
      const fileName = parts[2];
      const readFrom = `./${fileName}.${fileType}`;
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
