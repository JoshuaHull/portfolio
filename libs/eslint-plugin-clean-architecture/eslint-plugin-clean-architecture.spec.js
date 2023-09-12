import { describe, expect, it } from "vitest";
import { ESLint } from "eslint";

const newLinter = () => new ESLint({
  overrideConfig: {
    root: true,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: [
      "plugin:clean-architecture/withNumbers",
    ],
  }
});

describe("eslint-plugin-clean-architecture", () => {
  it.each([
    {
      from: "1-presentational",
      to: "1-infrastructure",
    },
    {
      from: "1-presentational",
      to: "2-application",
    },
    {
      from: "1-presentational",
      to: "3-domain",
    },
    {
      from: "1-presentational",
      to: "4-data",
    },
    {
      from: "1-infrastructure",
      to: "2-application",
    },
    {
      from: "1-infrastructure",
      to: "3-domain",
    },
    {
      from: "1-infrastructure",
      to: "4-data",
    },
    {
      from: "2-application",
      to: "3-domain",
    },
    {
      from: "2-application",
      to: "4-data",
    },
    {
      from: "3-domain",
      to: "4-data",
    },
  ])("should not allow importing $from code into the $to layer", async ({ from, to }) => {
    // Arrange
    const linter = newLinter();
    const fromName = from.split("-")[1];
    const toName = to.split("-")[1];
    const expectedErrorMessage = `Do not import ${fromName} code into the ${toName} layer`;

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
      from: "1-presentational",
      to: "1-presentational",
    },
    {
      from: "1-infrastructure",
      to: "1-infrastructure",
    },
    {
      from: "2-application",
      to: "2-application",
    },
    {
      from: "3-domain",
      to: "3-domain",
    },
    {
      from: "4-data",
      to: "4-data",
    },
    {
      from: "4-data",
      to: "1-presentational",
    },
    {
      from: "4-data",
      to: "1-infrastructure",
    },
    {
      from: "4-data",
      to: "2-application",
    },
    {
      from: "4-data",
      to: "3-domain",
    },
    {
      from: "3-domain",
      to: "1-presentational",
    },
    {
      from: "3-domain",
      to: "1-infrastructure",
    },
    {
      from: "3-domain",
      to: "2-application",
    },
    {
      from: "2-application",
      to: "1-presentational",
    },
    {
      from: "2-application",
      to: "1-infrastructure",
    },
    {
      from: "1-infrastructure",
      to: "1-presentational",
    },
  ])("should allow importing $from code into the $to layer", async ({ from, to }) => {
    // Arrange
    const linter = newLinter();

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
