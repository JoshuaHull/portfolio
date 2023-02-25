
import { Highlighter, Lexer } from "@code-blocks";
import { Component } from "vue";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const content = props.content;
    const lexer = new Lexer(content);
    const highlighter = new Highlighter(lexer);

    return highlighter.toVueRenderFunction();
  }
}

export default component as unknown as Component;
