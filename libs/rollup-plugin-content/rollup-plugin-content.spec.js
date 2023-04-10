import { describe, expect, test } from "vitest";
import { rollupPluginContent } from "./rollup-plugin-content";

describe("resolveId", () => {
  test("should resolve null for import not beginning with `content:`", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.resolveId("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should resolve for an import beginning with `content:`", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.resolveId("content:someFile.ts");

    // Assert
    expect(result).toStrictEqual({
      id: "content:someFile.ts",
      resolvedBy: "rollup-plugin-content",
    });
  });
});

describe("load", () => {
  test("should resolve null for import not beginning with `content:`", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.load("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should provide the content of a given file as an exported variable", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.load("content:cs:testAssets/SmallCSharpFile");

    // Assert
    expect(result).toStrictEqual({
      code: "export default \"namespace Small; public class CSharpFile {}\"",
      map: {
        mappings: "",
      },
    });
  });
});

describe("loading part of a file", () => {
  test("should resolve a large chunk of a file", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.load("content:cs@3,16:testAssets/LargeCSharpFile");

    // Assert
    expect(result).toStrictEqual({
      code: `export default "public class RollupPluginContent {\\n  private const string Prefix = \\"content:\\";\\n\\n  public string Name { get; }\\n\\n  public object ResolveId(string source) {\\n    return new();\\n  }\\n\\n  public object Load(string id) {\\n    return new();\\n  }\\n}"`,
      map: {
        mappings: "",
      },
    });
  });

  test("should resolve a small chunk of a file", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.load("content:cs@4,5:testAssets/LargeCSharpFile");

    // Assert
    expect(result).toStrictEqual({
      code: `export default "  private const string Prefix = \\"content:\\";"`,
      map: {
        mappings: "",
      },
    });
  });

  test("should resolve a single line of a file", () => {
    // Arrange
    const resolver = rollupPluginContent();

    // Act
    const result = resolver.load("content:cs@6,9:testAssets/LargeCSharpFile");

    // Assert
    expect(result).toStrictEqual({
      code: `export default "  public string Name { get; }\\n\\n  public object ResolveId(string source) {"`,
      map: {
        mappings: "",
      },
    });
  });
});
