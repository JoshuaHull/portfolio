import { describe, expect, it } from "vitest";
import { newLinter } from "./utils";

const config = "withData_allowInfraIntoPres";

describe(`eslint-plugin-clean-architecture > ${config}`, () => {
  it.each([
    {
      from: "presentation",
      to: "infrastructure",
    },
    {
      from: "presentation",
      to: "application",
    },
    {
      from: "presentation",
      to: "domain",
    },
    {
      from: "presentation",
      to: "data",
    },
    {
      from: "infrastructure",
      to: "application",
    },
    {
      from: "infrastructure",
      to: "domain",
    },
    {
      from: "infrastructure",
      to: "data",
    },
    {
      from: "application",
      to: "domain",
    },
    {
      from: "application",
      to: "data",
    },
    {
      from: "domain",
      to: "data",
    },
  ])("should not allow importing $from code into the $to layer", async ({ from, to }) => {
    // Arrange
    const linter = newLinter(config);
    const expectedErrorMessage = `Do not import ${from} code into the ${to} layer`;

    // Act
    const lintResults = await linter.lintText(
      `import { something } from "${from}"`,
      {
        filePath: `${to}/some-file.js`,
      },
    );

    // Assert
    expect(lintResults.length).toBe(1);

    const lintResult = lintResults[0];

    expect(lintResult.errorCount).toBe(1);
    expect(lintResult.messages.length).toBe(1);

    const message = lintResult.messages[0].message;
    expect(message).toContain(expectedErrorMessage);
  });

  it.each([
    {
      from: "presentation",
      to: "presentation",
    },
    {
      from: "infrastructure",
      to: "presentation",
    },
    {
      from: "infrastructure",
      to: "infrastructure",
    },
    {
      from: "application",
      to: "application",
    },
    {
      from: "domain",
      to: "domain",
    },
    {
      from: "data",
      to: "data",
    },
    {
      from: "data",
      to: "presentation",
    },
    {
      from: "data",
      to: "infrastructure",
    },
    {
      from: "data",
      to: "application",
    },
    {
      from: "data",
      to: "domain",
    },
    {
      from: "domain",
      to: "presentation",
    },
    {
      from: "domain",
      to: "infrastructure",
    },
    {
      from: "domain",
      to: "application",
    },
    {
      from: "application",
      to: "presentation",
    },
    {
      from: "application",
      to: "infrastructure",
    },
  ])("should allow importing $from code into the $to layer", async ({ from, to }) => {
    // Arrange
    const linter = newLinter(config);

    // Act
    const lintResults = await linter.lintText(
      `import { something } from "${from}"`,
      {
        filePath: `${to}/some-file.js`,
      },
    );

    // Assert
    expect(lintResults.length).toBe(1);
    expect(lintResults[0].errorCount).toBe(0);
  });
});
