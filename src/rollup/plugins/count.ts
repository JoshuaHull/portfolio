import { PathScurry } from "path-scurry";

const name = "rollup-plugin-count";
const prefix = "count:";

export function rollupPluginCount(opts = {}) {
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
    async load(id: string) {
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
