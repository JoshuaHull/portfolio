import { VueLexer } from "vue-lexer";
import { HighlighterHtml } from "highlighter-html";
import { VueTokenMap } from "./../CodeBlockForVue/vue-token-map.js";

/**
 * @param {typeof Handlebars} handlebars
 */
export const registerVueHelper = (handlebars) => {
  handlebars.registerHelper("vue",
    /**
     * @param {string} content
     * @returns {string}
     */
    (content) => {
      const lexer = new VueLexer(content ?? "");
      const tokenMap = new VueTokenMap();
      const highlighter = new HighlighterHtml(lexer, tokenMap);
      return highlighter.toHtml();
    }
  );
};
