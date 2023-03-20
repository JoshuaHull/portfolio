const name = "rollup-plugin-replace";

export function rollupPluginReplace(opts = { replace: null, with: null }) {
  return {
    name,
    transform(code: string) {
      if (!opts.replace || !opts.with)
        return null;

      return {
        code: code.replace(opts.replace, opts.with),
        map: null,
      };
    },
  };
}
