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
