import { Highlighter } from "./highlighter";
import { TypescriptLexer } from "typescript-lexer";
import { Component } from "vue";
import { TypescriptTokenMap } from "./typescript-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const content = props.content;
    const lexer = new TypescriptLexer(content);
    const tokenMap = new TypescriptTokenMap();
    const highlighter = new Highlighter(lexer, tokenMap);

    return highlighter.toVueRenderFunction();
  }
}

export default component as unknown as Component;
