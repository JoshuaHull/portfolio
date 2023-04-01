import { describe, expect, test } from "vitest";
import { vitePluginReplace } from ".";

describe("vite-plugin-replace", () => {
  test("should resolve null if `opts.replace` is falsey", () => {
    // Arrange
    const resolver = vitePluginReplace({
      replace: null,
      with: "with",
    });

    // Act
    const result = resolver.transformIndexHtml("");

    // Assert
    expect(result).toBeNull();
  });

  test("should resolve null if `opts.with` is falsey", () => {
    // Arrange
    const resolver = vitePluginReplace({
      replace: "replace",
      with: null,
    });

    // Act
    const result = resolver.transformIndexHtml("");

    // Assert
    expect(result).toBeNull();
  });

  test("should replace `replace` with `with`", () => {
    // Arrange
    const resolver = vitePluginReplace({
      replace: "not",
      with: "definitely",
    });

    // Act
    const result = resolver.transformIndexHtml(
      "The resolver has not run for me"
    );

    // Assert
    expect(result).toBe(
      "The resolver has definitely run for me"
    );
  });
});
