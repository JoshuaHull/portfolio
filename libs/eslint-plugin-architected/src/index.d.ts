import { ESLint } from "eslint";

declare module "eslint-plugin-architected" {
  export = {
    configs: ESLint.Plugin["configs"],
  };
};
