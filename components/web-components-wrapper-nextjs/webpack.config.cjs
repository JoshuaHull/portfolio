const path = require("path");

module.exports = {
  entry: {
    FoldablePanel: "./src/index.mjs",
  },
  resolve: {
    extensions: [".mjs"],
    descriptionFiles: ["package.json"],
    fullySpecified: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module",
    }
  },
  experiments: {
    outputModule: true,
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.d.ts$/,
        use: "ignore-loader",
      },
    ],
  },
};
