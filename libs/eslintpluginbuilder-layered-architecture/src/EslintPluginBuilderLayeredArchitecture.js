export class EslintPluginBuilderLayeredArchitecture {
  withLayer(layer) {
    const layerMap = {};
    layerMap[layer] = [];
    return new LayeredArchitectureBuilder(layerMap);
  }
}

class LayeredArchitectureBuilder {
  constructor(
    layerMap,
  ) {
    this.layerMap = layerMap;
  }

  withLayer(layer, dependsOn) {
    if (this.layerMap.hasOwnProperty(layer))
      throw new Error(`Cannot add layer "${layer}" as it has already been added`);

    const deps = dependsOn ?? [];

    for (let dep of deps)
      if (!this.layerMap.hasOwnProperty(dep))
        throw new Error(`Layer "${layer}" cannot depend on layer "${dep}" as layer "${dep}" has not been added to the builder`);

    const layerMap = this.layerMap;
    layerMap[layer] = deps;

    return this;
  }

  build(pluginName) {
    const overrides = [];

    for (let layer in this.layerMap) {
      const deps = this.layerMap[layer];
      const patterns = [];

      for (let otherLayer in this.layerMap) {
        if (layer === otherLayer)
          continue;

        if (deps.includes(otherLayer))
          continue;

        patterns.push({
          group: [otherLayer],
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
    };
  }
}
