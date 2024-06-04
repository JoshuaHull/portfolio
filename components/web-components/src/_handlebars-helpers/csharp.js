import { CSharpLexer } from "csharp-lexer";
import { HighlighterHtml } from "highlighter-html";
import { CSharpTokenMap } from "./../CodeBlockForCSharp/csharp-token-map.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerCSharpHelper = (handlebars) => {
  handlebars.registerHelper("csharp",
    /**
     * @param {string} content
     * @returns {string}
     */
    (content) => {
      const lexer = new CSharpLexer(content ?? "");
      const tokenMap = new CSharpTokenMap();
      const highlighter = new HighlighterHtml(lexer, tokenMap);
      return highlighter.toHtml();
    }
  );
};
