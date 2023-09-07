import { describe, expect, test } from "vitest";
import { rollupPluginHandlebarsCompile } from "./rollup-plugin-handlebars-compile";

describe("resolveId", () => {
  test("should resolve null for import not beginning with `compile:`", () => {
    // Arrange
    const resolver = rollupPluginHandlebarsCompile();

    // Act
    const result = resolver.resolveId("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should resolve for an import beginning with `compile:`", () => {
    // Arrange
    const resolver = rollupPluginHandlebarsCompile();

    // Act
    const result = resolver.resolveId("compile:someFile.ts");

    // Assert
    expect(result).toStrictEqual({
      id: "compile:someFile.ts",
      resolvedBy: "rollup-plugin-handlebars-compile",
    });
  });
});

describe("load", () => {
  test("should resolve null for import not beginning with `compile:`", () => {
    // Arrange
    const resolver = rollupPluginHandlebarsCompile();

    // Act
    const result = resolver.load("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should provide the compiled content of a given file as an exported variable", () => {
    // Arrange
    const resolver = rollupPluginHandlebarsCompile();

    // Act
    const result = resolver.load("compile:html:testAssets/empty-vars.template");

    // Assert
    expect(result).toStrictEqual({
      code: "export default \"<p>Compiling a file with empty vars.</p>\"",
      map: {
        mappings: "",
      },
    });
  });
});
