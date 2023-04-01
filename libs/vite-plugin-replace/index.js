const name = "vite-plugin-replace";

export function vitePluginReplace(opts) {
  return {
    name,
    transformIndexHtml(code) {
      if (!opts.replace || !opts.with)
        return null;

      return code.replace(opts.replace, opts.with);
    },
  };
}
