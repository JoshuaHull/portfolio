import { CSharpLexer } from "csharp-lexer";
import { TypescriptLexer } from "typescript-lexer";
import { VueLexer } from "vue-lexer";
import { HighlighterHtml } from "highlighter-html";
import { CSharpTokenMap } from "./CodeBlockForCSharp/csharp-token-map";
import { TypescriptTokenMap } from "./CodeBlockForTypescript/typescript-token-map";
import { VueTokenMap } from "./CodeBlockForVue/vue-token-map";

/**
 * @param {import("handlebars").Handlebars} handlebars
 */
export const registerHandlebarsHelpers = (handlebars) => {
  handlebars.registerHelper("styleIconContainer", (height, width, color) => {
    let style = `style="`;
    if (!!height) style += `--icon-container-height: ${height}; `;
    if (!!width) style += `--icon-container-width: ${width}; `;
    if (!!color) style += `--icon-container-color: ${color}; `;
    style += `"`;
    return style;
  });

  handlebars.registerHelper("csharp", (content) => {
    const lexer = new CSharpLexer(content ?? "");
    const tokenMap = new CSharpTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });

  handlebars.registerHelper("typescript", (content) => {
    const lexer = new TypescriptLexer(content ?? "");
    const tokenMap = new TypescriptTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });

  handlebars.registerHelper("vue", (content) => {
    const lexer = new VueLexer(content ?? "");
    const tokenMap = new VueTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });

  handlebars.registerHelper("lineNumbers", (content) => {
    const lines = content?.split("\n") ?? "";

    let rtn = "";

    for (let i = 0; i < lines.length; i += 1) {
      const padding = " ".repeat(`${lines.length}`.length - `${i + 1}`.length);
      rtn += `${padding}${i + 1}\n`;
    }

    return rtn;
  });
};
