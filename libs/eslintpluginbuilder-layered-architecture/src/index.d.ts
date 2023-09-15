import { ESLint } from "eslint";

export declare class EslintPluginBuilderLayeredArchitecture {
  public withLayer<L extends string>(layer: L): LayeredArchitectureBuilder<L, never>;
}

declare class LayeredArchitectureBuilder<T extends string, D> {
  constructor(layerMap: { [layer in T]: D[] });

  public withLayer<L extends string>(layer: L, dependsOn? : T[]): LayeredArchitectureBuilder<T | L, T>;

  public build(pluginName: string): ESLint.Plugin["configs"];
}
