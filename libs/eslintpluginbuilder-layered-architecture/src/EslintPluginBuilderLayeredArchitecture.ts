export class EslintPluginBuilderLayeredArchitecture {
  withLayer<L extends string>(layer: L) {
    return new LayeredArchitectureBuilder<L, never>(layer, [], new Set<string>([layer]));
  }
}

class LayeredArchitectureBuilder<T extends string, D> {
  constructor(
    private layer: T,
    private dependsOn: D[],
    private allLayers: Set<string>,
  ) {}

  withLayer<L extends string>(layer: L, dependsOn? : T[]) {
    if (this.allLayers.has(layer))
      throw new Error(`Cannot add layer "${layer}" has it has already been added`);

    const deps = dependsOn ?? [];

    for (let dep of deps)
      if (!this.allLayers.has(dep))
        throw new Error(`Layer "${layer}" cannot depend on layer "${dep}" as layer "${dep}" has not been added to the builder`);

    this.allLayers.add(layer);

    return new LayeredArchitectureBuilder<T | L, T>(layer, deps, this.allLayers);
  }
}
