import { describe, expect, test } from "vitest";
import { rollupPluginHtmlMinify } from ".";

describe("rollup-plugin-html-minify", () => {
  test("should resolve null for file not ending in `.html`", () => {
    // Arrange
    const resolver = rollupPluginHtmlMinify();

    // Act
    const result = resolver.transform("<html></html>", "someFile.txt");

    // Assert
    expect(result).toBeNull();
  });

  test("should do simple minifications like removing new lines and leading whitespace", () => {
    // Arrange
    const resolver = rollupPluginHtmlMinify();

    // Act
    const result = resolver.transform(
`<html>
  <body>
    <div></div>

    <div></div>
  </body>
</html>
`,
      "someFile.html"
    );

    // Assert
    expect(result.code).toBe(
`<html>
<body>
<div></div>
<div></div>
</body>
</html>
`
    );
  });
});
