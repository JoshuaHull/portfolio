import { ESLint } from "eslint";

/**
 * @param {string} config
 */
export const newLinter = (config) => new ESLint({
  overrideConfig: {
    root: true,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: [
      `plugin:clean-architecture/${config}`,
    ],
  }
});
