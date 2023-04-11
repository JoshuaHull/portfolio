import { describe, expect, test } from "vitest";
import { rollupPluginCount } from "./rollup-plugin-count";

describe("resolveId", () => {
  test("should resolve null for import not beginning with `count:`", () => {
    // Arrange
    const resolver = rollupPluginCount();

    // Act
    const result = resolver.resolveId("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should resolve for an import beginning with `count:`", () => {
    // Arrange
    const resolver = rollupPluginCount();

    // Act
    const result = resolver.resolveId("count:ts");

    // Assert
    expect(result).toStrictEqual({
      id: "count:ts",
      resolvedBy: "rollup-plugin-count",
    });
  });
});

describe("load", () => {
  test("should not load if the import does not begin with `count:`", async () => {
    // Arrange
    const resolver = rollupPluginCount();

    // Act
    const result = await resolver.load("@someOrg/somePackage");

    // Assert
    expect(result).toBeNull();
  });

  test("should count the number of java files in the src folder", async () => {
    // Arrange
    const resolver = rollupPluginCount();

    // Act
    const result = await resolver.load("count:java");

    // Assert
    expect(result.code).toBe("export default 6;");
  });

  test("should count the number of python files in the src folder", async () => {
    // Arrange
    const resolver = rollupPluginCount();

    // Act
    const result = await resolver.load("count:py");

    // Assert
    expect(result.code).toBe("export default 1;");
  });
});
