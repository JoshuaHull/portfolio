import { readFileSync } from "fs";
import Handlebars from "handlebars";
import path from "path";

const name = "rollup-plugin-handlebars-compile";
const prefix = "compile:";

/**
 * @type {import("./rollup-plugin-handlebars-compile").rollupPluginHandlebarsCompile}
 */
export function rollupPluginHandlebarsCompile(options) {
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

      const relativeTo = options?.relativeTo ?? ".";
      const readFrom = `${relativeTo}/${fileName}.${fileType}`;
      const content = readFileSync(readFrom, "utf-8");

      const handlebars = Handlebars.create();
      options?.registerHelpers?.(handlebars);
      const compiled = handlebars.compile(content)(options?.vars);

      const resolved = path.resolve(readFrom);
      this.addWatchFile(resolved);

      return {
        code: `export default ${JSON.stringify(compiled)}`,
        map: {
          mappings: "",
        },
      };
    },
  };
}
