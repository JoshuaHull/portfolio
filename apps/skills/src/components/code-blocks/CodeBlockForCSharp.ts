import { HighlighterVue } from "highlighter-vue";
import { CSharpLexer } from "csharp-lexer";
import { Component } from "vue";
import { CSharpTokenMap } from "./csharp-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const { content } = toRefs(props);

    const tokenMap = new CSharpTokenMap();

    const lexer = computed(() => new CSharpLexer(content.value));
    const highlighter = computed(() => new HighlighterVue(lexer.value, tokenMap));

    return () => highlighter.value.toVNode();
  }
}

export default component as unknown as Component;
