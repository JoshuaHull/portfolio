import { Highlighter } from "./highlighter";
import { CsharpLexer } from "./csharp-lexer";
import { Component } from "vue";
import { CSharpTokenMap } from "./csharp-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const content = props.content;
    const lexer = new CsharpLexer(content);
    const tokenMap = new CSharpTokenMap();
    const highlighter = new Highlighter(lexer, tokenMap);

    return highlighter.toVueRenderFunction();
  }
}

export default component as unknown as Component;
