import { describe, expect, test } from "vitest";
import { Span, Highlighter } from "./";
import { CSharpLexer } from "csharp-lexer";

// TODO: this is copy-pasted, I want to either be a dev dependency
// or use a different language
class CSharpTokenMap {
  map(token) {
    switch (token.kind) {
      case "KEYWORD":
        return new Span("keyword", token.value);
      case "PROPERTY":
        return new Span("property", token.value);
      case "SYMBOL":
        return new Span("symbol", token.value);
      case "OPEN_PAREN":
      case "CLOSE_PAREN":
      case "OPEN_CURLY":
      case "CLOSE_CURLY":
      case "OPEN_ANGLE":
      case "CLOSE_ANGLE":
      case "DOT":
      case "SEMICOLON":
        return new Span("literal", token.value);
      case "STRING":
        return new Span("string", token.value);
      case "TYPE":
        return new Span("type", token.value);
      case "NUMBER":
        return new Span("number", token.value);
    }

    return null;
  }
}

describe("toHtml", () => {
  test("should return a html string with classes which allow you to highlight keywords, etc", () => {
    // Arrange
    const content =
`public class User {
  public long Id { get; set; }
  public string Name { get; set; }

  public void SetName(string newName) {
    Name = newName;
  }
}`;
    const lexer = new CSharpLexer(content);
    const tokenMap = new CSharpTokenMap();
    const highlighter = new Highlighter(lexer, tokenMap);

    // Act
    const result = highlighter.toHtml();

    // Assert
    expect(result).toBe(
`<span class="keyword">public</span> <span class="keyword">class</span> <span class="symbol">User</span> <span class="literal">{</span>
  <span class="keyword">public</span> <span class="keyword">long</span> <span class="symbol">Id</span> <span class="literal">{</span> <span class="keyword">get</span><span class="literal">;</span> <span class="keyword">set</span><span class="literal">;</span> <span class="literal">}</span>
  <span class="keyword">public</span> <span class="keyword">string</span> <span class="symbol">Name</span> <span class="literal">{</span> <span class="keyword">get</span><span class="literal">;</span> <span class="keyword">set</span><span class="literal">;</span> <span class="literal">}</span>

  <span class="keyword">public</span> <span class="keyword">void</span> <span class="symbol">SetName</span><span class="literal">(</span><span class="keyword">string</span> <span class="symbol">newName</span><span class="literal">)</span> <span class="literal">{</span>
    <span class="symbol">Name</span> <span class="symbol">=</span> <span class="symbol">newName</span><span class="literal">;</span>
  <span class="literal">}</span>
<span class="literal">}</span>`);
  });
});
