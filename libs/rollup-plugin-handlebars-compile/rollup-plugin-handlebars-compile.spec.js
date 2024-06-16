import { describe, expect, test } from "vitest";
import { rollupPluginHandlebarsCompile } from "./rollup-plugin-handlebars-compile";

const makeResolver = (args) => {
  const resolver = rollupPluginHandlebarsCompile(args);
  resolver.addWatchFile = () => {};
  return resolver;
};

describe("resolveId", () => {
  test("should resolve null for import not beginning with `compile:`", () => {
    // Arrange
    const resolver = makeResolver();

    // Act
    const result = resolver.resolveId("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should resolve for an import beginning with `compile:`", () => {
    // Arrange
    const resolver = makeResolver();

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
    const resolver = makeResolver();

    // Act
    const result = resolver.load("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should provide the compiled content of a given file as an exported variable", () => {
    // Arrange
    const resolver = makeResolver();

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

  test("should compile a file and fill in the given variables", () => {
    // Arrange
    const resolver = makeResolver({
      vars: {
        first: "a",
        second: "with",
        third: "vars",
      },
    });

    // Act
    const result = resolver.load("compile:html:testAssets/populate-vars.template");

    // Assert
    expect(result).toStrictEqual({
      code: "export default \"<p>Compiling a file with three vars.</p>\"",
      map: {
        mappings: "",
      },
    });
  });

  test("should be able to compile a file with customer helpers, provided they are registered", () => {
    // Arrange
    const resolver = makeResolver({
      registerHelpers: (handlebars) => {
        handlebars.registerHelper("withCustomHelperTimes", (count) => `with ${count} custom helper(s).`);
      },
    });

    // Act
    const result = resolver.load("compile:html:testAssets/custom-helper.template");

    // Assert
    expect(result).toStrictEqual({
      code: "export default \"<p>Compiling a file with 1 custom helper(s).</p>\"",
      map: {
        mappings: "",
      },
    });
  });

  test("should allow providing an alternative root from which to resolve the templates", () => {
    // Arrange
    const resolver = makeResolver({
      relativeTo: "testAssets/alternativeRoot",
      vars: {
        alternativeRoot: "testAssets/alternativeRoot",
      },
    });

    // Act
    const result = resolver.load("compile:html:some.template");

    // Assert
    expect(result).toStrictEqual({
      code: "export default \"<p>Resolving from testAssets/alternativeRoot.</p>\"",
      map: {
        mappings: "",
      },
    });
  });
});
