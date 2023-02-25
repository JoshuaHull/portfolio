import { describe, expect, test } from "vitest";
import { Lexer, Token } from "@code-blocks";

describe("lexer", () => {
  test("should return EOF token when content runs out", () => {
    // Arrange
    const content = "";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result.kind).toBe("EOF");
  });
});

describe("literals", () => {
  test("should identify and return literal tokens", () => {
    // Arrange
    const content = "(){};";
    const lexer = new Lexer(content);

    // Act
    const result: Token[] = [];

    for (;;) {
      const next = lexer.next();

      if (next.kind === "EOF")
        break;

      result.push(next);
    }

    // Assert
    expect(result).toStrictEqual([
      {
        value: "(",
        kind: "OPEN_PAREN",
      },
      {
        value: ")",
        kind: "CLOSE_PAREN",
      },
      {
        value: "{",
        kind: "OPEN_CURLY",
      },
      {
        value: "}",
        kind: "CLOSE_CURLY",
      },
      {
        value: ";",
        kind: "SEMICOLEN",
      },
    ]);
  });
});

describe("keywords", () => {
  test("should return the largest keyword that matches", () => {
    // Arrange
    const content = "double";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result).toStrictEqual({
      kind: "KEYWORD",
      value: "double",
    });
    expect(result).not.toStrictEqual({
      kind: "KEYWORD",
      value: "do",
    });
  });

  test("should not return a keyword if the symbol is actually a superstring of a keyword", () => {
    // Arrange
    const content = "publically";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result).toStrictEqual({
      kind: "SYMBOL",
      value: "publically",
    });
    expect(result).not.toStrictEqual({
      kind: "KEYWORD",
      value: "public",
    });
  });

  test("should return the keyword even if it is followed by a space", () => {
    // Arrange
    const content = "void ";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result).toStrictEqual({
      kind: "KEYWORD",
      value: "void",
    });
  });

  test("should return the keyword even if it is followed by a newline", () => {
    // Arrange
    const content = "bool\n";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result).toStrictEqual({
      kind: "KEYWORD",
      value: "bool",
    });
  });

  test("should return space even if it is followed by a keyword", () => {
    // Arrange
    const content = " class";
    const lexer = new Lexer(content);

    // Act
    const result = lexer.next();

    // Assert
    expect(result).toStrictEqual({
      kind: "OTHER",
      value: " ",
    });
  });
});

describe("entire lines", () => {
  function allTokensFrom(lexer: Lexer): Token[] {
    const rtn: Token[] = [];

    for (;;) {
      const next = lexer.next();
      rtn.push(next);

      if (next.kind === "EOF")
        break;
    }

    return rtn;
  }

  test("should tokenize a C# class declaration", () => {
    // Arrange
    const content = "public class User {";
    const lexer = new Lexer(content);

    // Act
    const result = allTokensFrom(lexer);

    // Assert
    expect(result).toStrictEqual([
      {
        kind: "KEYWORD",
        value: "public",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "KEYWORD",
        value: "class",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "SYMBOL",
        value: "User",
      },
      {
        kind: "OTHER",
        value: " ",
      },
      {
        kind: "OPEN_CURLY",
        value: "{",
      },
      {
        kind: "EOF",
        value: "",
      },
    ]);
  });
});
