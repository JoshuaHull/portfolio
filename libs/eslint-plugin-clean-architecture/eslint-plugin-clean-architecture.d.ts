import { ESLint } from "eslint";

const CleanArchitectureSettings = [
  "withNumbers",
  "withData",
  "allowInfraIntoPres",
  "strict",
] as const;

declare module "eslint-plugin-clean-architecture" {
  export type CleanArchitectureSetting = typeof CleanArchitectureSettings[number];

  export = {
    configs: ESLint.Plugin["configs"],
    CleanArchitectureSettings,
  };
};
