import { TypescriptLexer } from "typescript-lexer";
import { HighlighterHtml } from "highlighter-html";
import { TypescriptTokenMap } from "./../CodeBlockForTypescript/typescript-token-map.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerTypescriptHelper = (handlebars) => {
  handlebars.registerHelper("typescript",
    /**
     * @param {string} content
     * @returns {string}
     */
    (content) => {
      const lexer = new TypescriptLexer(content ?? "");
      const tokenMap = new TypescriptTokenMap();
      const highlighter = new HighlighterHtml(lexer, tokenMap);
      return highlighter.toHtml();
    }
  );
};
