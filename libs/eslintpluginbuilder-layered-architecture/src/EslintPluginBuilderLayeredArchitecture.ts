import { ESLint } from "eslint";

export class EslintPluginBuilderLayeredArchitecture {
  public withLayer<L extends string>(layer: L) {
    const layerMap = {} as { [layer in L]: [] };
    layerMap[layer] = [];
    return new LayeredArchitectureBuilder<L, never>(layerMap);
  }
}

class LayeredArchitectureBuilder<T extends string, D> {
  constructor(
    private layerMap: { [layer in T]: D[] },
  ) {}

  public withLayer<L extends string>(layer: L, dependsOn? : T[]) {
    if (this.layerMap.hasOwnProperty(layer))
      throw new Error(`Cannot add layer "${layer}" has it has already been added`);

    const deps = dependsOn ?? [];

    for (let dep of deps)
      if (!this.layerMap.hasOwnProperty(dep))
        throw new Error(`Layer "${layer}" cannot depend on layer "${dep}" as layer "${dep}" has not been added to the builder`);

    // type gynmastics :(
    // TODO: remove typescript
    const layerMap = this.layerMap as unknown as { [layer in T | L]: T[] };
    layerMap[layer] = deps;

    return this as unknown as LayeredArchitectureBuilder<T | L, T>;
  }

  public build(pluginName: string): ESLint.Plugin["configs"] {
    const overrides: any[] = [];

    for (let layer in this.layerMap) {
      const deps = this.layerMap[layer];
      const patterns = [];

      for (let otherLayer in this.layerMap) {
        if (layer === otherLayer)
          continue;

        if (deps.includes(otherLayer as any))
          continue;

        patterns.push({
          group: [`**/${otherLayer}`],
          message: `Do not import ${otherLayer} code into the ${layer} layer`,
        });
      }

      overrides.push({
        files: [`**/${layer}/**`],
        rules: {
          "no-restricted-imports": ["error", {
            patterns,
          }],
        },
      });
    }

    return {
      plugins: [pluginName],
      rules: {
        "no-restricted-imports": "off",
      },
      overrides,
    } as ESLint.Plugin["configs"];
  }
}
