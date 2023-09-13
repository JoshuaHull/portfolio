import { describe, expect, it } from "vitest";
import { newLinter } from "./utils";

const config = "strict";

describe(`eslint-plugin-clean-architecture > ${config}`, () => {
  it.each([
    {
      from: "presentational",
      to: "infrastructure",
    },
    {
      from: "presentational",
      to: "application",
    },
    {
      from: "presentational",
      to: "domain",
    },
    {
      from: "infrastructure",
      to: "presentational",
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
      from: "application",
      to: "domain",
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
      from: "presentational",
      to: "presentational",
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
      from: "domain",
      to: "presentational",
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
      to: "presentational",
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
