import { describe, expect, it } from "vitest";
import { EslintPluginBuilderLayeredArchitecture } from "./EslintPluginBuilderLayeredArchitecture";

describe("EslintPluginBuilderLayeredArchitecture", () => {
  it("should not allow adding the same layer twice", () => {
    // Act
    const act = () => new EslintPluginBuilderLayeredArchitecture()
      .withLayer("first")
      .withLayer("second", ["first"])
      .withLayer("third", ["first", "second"])
      .withLayer("second");

    // Assert
    expect(act).toThrowError(`Cannot add layer "second" has it has already been added`);
  });
});
