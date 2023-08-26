const path = require("path");
const ReactFlightWebpackPlugin = require('./src/react-server-dom-webpack/plugin.cjs');

module.exports = {
  entry: {
    FoldablePanel: "./src/index.mjs",
  },
  resolve: {
    extensions: [".mjs", ".cjs", ".js"],
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
  plugins: [
    new ReactFlightWebpackPlugin({
      isServer: false,
      clientReferences: {
        directory: './src',
        recursive: true,
        include: /\.(js|ts|jsx|tsx|mjs|cjs)$/,
      },
    }),
  ],
};
