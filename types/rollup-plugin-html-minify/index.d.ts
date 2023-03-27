export function rollupPluginHtmlMinify(): {
  name: string;
  transform(code: string, id: string): {
    code: string;
  };
};
