export class EslintPluginBuilderLayeredArchitecture {
  withLayer<L extends string>(layer: L) {
    return new LayeredArchitectureBuilder<L, never>(layer, [], new Set<string>());
  }
}

class LayeredArchitectureBuilder<T, D> {
  constructor(
    private layer: T,
    private dependsOn: D[],
    private allLayers: Set<string>,
  ) {}

  withLayer<L extends string>(layer: L, dependsOn? : T[]) {
    if (this.allLayers.has(layer))
      throw new Error(`Cannot add layer "${layer}" has it has already been added`);

    this.allLayers.add(layer);

    const deps = dependsOn ?? [];
    return new LayeredArchitectureBuilder<T | L, T>(layer, deps, this.allLayers);
  }
}
