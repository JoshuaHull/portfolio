
import { Highlighter } from "./highlighter";
import { Component } from "vue";
import { VueLexer } from "./vue-lexer";
import { VueTokenMap } from "./vue-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const content = props.content;
    const lexer = new VueLexer(content);
    const tokenMap = new VueTokenMap();
    const highlighter = new Highlighter(lexer, tokenMap);

    return highlighter.toVueRenderFunction();
  }
}

export default component as unknown as Component;
