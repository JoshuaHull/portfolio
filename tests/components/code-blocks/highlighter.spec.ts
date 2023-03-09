import { describe, expect, test } from "vitest";
import { Highlighter, Lexer } from "@code-blocks";

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
    const lexer = new Lexer(content);
    const highlighter = new Highlighter(lexer);

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
