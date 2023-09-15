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

  it("should not allow adding a layer which depends on a non-existing layer", () => {
    // Act
    const act = () => new EslintPluginBuilderLayeredArchitecture()
      .withLayer("first")
      .withLayer("second", ["first"])
      .withLayer("third", ["first", "second", "fourth" as "second"]);

    // Assert
    expect(act).toThrowError(`Layer "third" cannot depend on layer "fourth" as layer "fourth" has not been added to the builder`);
  });

  it("should build a config which prevents importing code into incorrect layers", () => {
    // Arrange
    const builder = new EslintPluginBuilderLayeredArchitecture()
      .withLayer("domain")
      .withLayer("application", ["domain"])
      .withLayer("presentation", ["application", "domain"])
      .withLayer("infrastructure", ["application", "domain"]);

    // Act
    const result = builder.build("clean-architecture");

    // Assert
    expect(result).toStrictEqual({
      plugins: ["clean-architecture"],
      rules: {
        "no-restricted-imports": "off",
      },
      overrides: [
        {
          files: ["**/domain/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["application"],
                message: "Do not import application code into the domain layer",
              }, {
                group: ["presentation"],
                message: "Do not import presentation code into the domain layer",
              }, {
                group: ["infrastructure"],
                message: "Do not import infrastructure code into the domain layer",
              }],
            }],
          },
        },
        {
          files: ["**/application/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["presentation"],
                message: "Do not import presentation code into the application layer",
              }, {
                group: ["infrastructure"],
                message: "Do not import infrastructure code into the application layer",
              }],
            }],
          },
        },
        {
          files: ["**/presentation/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["infrastructure"],
                message: "Do not import infrastructure code into the presentation layer",
              }],
            }],
          },
        },
        {
          files: ["**/infrastructure/**"],
          rules: {
            "no-restricted-imports": ["error", {
              patterns: [{
                group: ["presentation"],
                message: "Do not import presentation code into the infrastructure layer",
              }],
            }],
          },
        },
      ],
    });
  });
});
