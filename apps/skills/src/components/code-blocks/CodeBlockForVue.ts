import { Highlighter } from "highlighter";
import { Component } from "vue";
import { VueLexer } from "vue-lexer";
import { VueTokenMap } from "./vue-token-map";

const component = {
  props: [
    "content",
  ],
  setup(props: { content: string }) {
    const { content } = toRefs(props);

    const tokenMap = new VueTokenMap();

    const lexer = computed(() => new VueLexer(content.value));
    const highlighter = computed(() => new Highlighter(lexer.value, tokenMap));

    return () => highlighter.value.toVNode();
  }
}

export default component as unknown as Component;
