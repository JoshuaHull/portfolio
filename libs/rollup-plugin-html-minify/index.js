const name = "rollup-plugin-html-minify";

export function rollupPluginHtmlMinify() {
  return {
    name,
    transform(code, id) {
      if (!id.endsWith(".html"))
        return null;

      const lines = code.split("\n");

      let rtn = "";

      for (let line of lines) {
        const lineContent = line.trimStart();

        if (lineContent === "")
          continue;

        rtn += `${lineContent}\n`;
      }

      return {
        code: rtn,
      };
    },
  };
}
