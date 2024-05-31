import { Plugin } from "rollup";
import Handlebars from "handlebars";

export type RollupPluginHandlebarsCompileOptions<TVars> = {
  vars?: TVars;
  registerHelpers?: (handlebars: typeof Handlebars) => void;
};

export function rollupPluginHandlebarsCompile<TVars>(options?: RollupPluginHandlebarsCompileOptions<TVars>): Plugin;
