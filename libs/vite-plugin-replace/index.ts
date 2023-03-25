const name = "vite-plugin-replace";

export function vitePluginReplace(opts = { replace: null, with: null }) {
  return {
    name,
    transformIndexHtml(code: string) {
      if (!opts.replace || !opts.with)
        return null;

      return code.replace(opts.replace, opts.with);
    },
  };
}
