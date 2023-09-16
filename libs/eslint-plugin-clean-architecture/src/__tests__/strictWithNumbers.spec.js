import { describe, expect, it } from "vitest";
import { newLinter } from "./utils";

const config = "strictWithNumbers";

describe(`eslint-plugin-clean-architecture > ${config}`, () => {
  it.each([
    {
      from: "1-presentation",
      to: "1-infrastructure",
    },
    {
      from: "1-presentation",
      to: "2-application",
    },
    {
      from: "1-presentation",
      to: "3-domain",
    },
    {
      from: "1-infrastructure",
      to: "1-presentation",
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
      from: "1-presentation",
      to: "1-presentation",
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
      to: "1-presentation",
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
      to: "1-presentation",
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
