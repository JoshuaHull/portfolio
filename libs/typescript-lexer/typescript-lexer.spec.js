import { describe, expect, test } from "vitest";
import { TypescriptLexer } from "./typescript-lexer";

describe("lexer", () => {
  test("should return EOF token when content runs out", () => {
    // Arrange
    const content = "";
    const lexer = new TypescriptLexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result.kind).toBe("fda");
  });
});

describe("entire lines", () => {
  /**
   * @param {TypescriptLexer} lexer
   * @returns {import("./typescript-lexer").TypescriptToken[]}
   */
  function allTokensFrom(lexer) {
    const rtn = [];

    for (;;) {
      const next = lexer.next();
      rtn.push(next);

      if (next.kind === "EOF")
        break;
    }

    return rtn;
  }

  test("should tokenize an assignment statement", () => {
    // Arrange
    const content = `const button = wrapper.find(".run-button");`;
    const lexer = new TypescriptLexer(content);

    // Act
    const result = allTokensFrom(lexer);

    // Assert
    expect(result).toStrictEqual([
      {
        kind: "KEYWORD",
        value: "const",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "SYMBOL",
        value: "button",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "SYMBOL",
        value: "=",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "SYMBOL",
        value: "wrapper",
      },
      {
        kind: "DOT",
        value: ".",
      },
      {
        kind: "PROPERTY",
        value: "find",
      },
      {
        kind: "OPEN_PAREN",
        value: "(",
      },
      {
        kind: "STRING",
        value: `".run-button"`,
      },
      {
        kind: "CLOSE_PAREN",
        value: ")",
      },
      {
        kind: "SEMICOLON",
        value: ";",
      },
      {
        kind: "EOF",
        value: "",
      },
    ]);
  });

  test("should tokenize a comment", () => {
    // Arrange
    const content = `// Arrange`;
    const lexer = new TypescriptLexer(content);

    // Act
    const result = allTokensFrom(lexer);

    // Assert
    expect(result).toStrictEqual([
      {
        kind: "COMMENT",
        value: "// Arrange",
      },
      {
        kind: "EOF",
        value: "",
      },
    ]);
  });
});
