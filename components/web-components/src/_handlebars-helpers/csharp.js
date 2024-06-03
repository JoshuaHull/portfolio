import { CSharpLexer } from "csharp-lexer";
import { HighlighterHtml } from "highlighter-html";
import { CSharpTokenMap } from "./../CodeBlockForCSharp/csharp-token-map.js";

/**
 * @type {import("./index.d.ts").registerCSharpHelper}
 */
export const registerCSharpHelper = (handlebars) => {
  handlebars.registerHelper("csharp", (content) => {
    const lexer = new CSharpLexer(content ?? "");
    const tokenMap = new CSharpTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });
};
