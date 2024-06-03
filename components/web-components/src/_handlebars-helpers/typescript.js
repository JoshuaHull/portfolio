import { TypescriptLexer } from "typescript-lexer";
import { HighlighterHtml } from "highlighter-html";
import { TypescriptTokenMap } from "./../CodeBlockForTypescript/typescript-token-map.js";

/**
 * @type {import("./index.d.ts").registerTypescriptHelper}
 */
export const registerTypescriptHelper = (handlebars) => {
  handlebars.registerHelper("typescript", (content) => {
    const lexer = new TypescriptLexer(content ?? "");
    const tokenMap = new TypescriptTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });
};
