import { VueLexer } from "vue-lexer";
import { HighlighterHtml } from "highlighter-html";
import { VueTokenMap } from "./../CodeBlockForVue/vue-token-map.js";

/**
 * @type {import("./index.d.ts").registerVueHelper}
 */
export const registerVueHelper = (handlebars) => {
  handlebars.registerHelper("vue", (content) => {
    const lexer = new VueLexer(content ?? "");
    const tokenMap = new VueTokenMap();
    const highlighter = new HighlighterHtml(lexer, tokenMap);
    return highlighter.toHtml();
  });
};
