namespace Large;

public class RollupPluginContentChunks {
  private const string Prefix = "content:";

  public string Name { get; }

  public object ResolveId(string source) {
    return new();
  }

  public object Load(string id) {
    return new();
  }
}
