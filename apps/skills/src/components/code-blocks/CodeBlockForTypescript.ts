import { Highlighter } from "./highlighter";
import { TypescriptLexer } from "typescript-lexer";
import { Component } from "vue";
import { TypescriptTokenMap } from "./typescript-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const { content } = toRefs(props);

    const tokenMap = new TypescriptTokenMap();

    const lexer = computed(() => new TypescriptLexer(content.value));
    const highlighter = computed(() => new Highlighter(lexer.value, tokenMap));

    return () => highlighter.value.toVNode();
  }
}

export default component as unknown as Component;
