
import { Highlighter } from "./highlighter";
import { Component } from "vue";
import { VueLexer } from "./vue-lexer";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const content = props.content;
    const lexer = new VueLexer(content);
    const highlighter = new Highlighter(lexer);

    return highlighter.toVueRenderFunction();
  }
}

export default component as unknown as Component;
