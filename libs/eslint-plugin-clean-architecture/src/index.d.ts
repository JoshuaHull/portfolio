import { ESLint } from "eslint";

declare module "eslint-plugin-clean-architecture" {
  export = {
    configs: ESLint.Plugin["configs"],
  };
};
