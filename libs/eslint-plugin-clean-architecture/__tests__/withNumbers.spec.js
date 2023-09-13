import { describe, expect, it } from "vitest";
import { newLinter } from "./utils";

const config = "withNumbers";

describe(`eslint-plugin-clean-architecture > ${config}`, () => {
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
      from: "1-infrastructure",
      to: "1-presentational",
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
      from: "2-application",
      to: "3-domain",
    },
  ])("should not allow importing $from code into the $to layer", async ({ from, to }) => {
    // Arrange
    const linter = newLinter(config);
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
