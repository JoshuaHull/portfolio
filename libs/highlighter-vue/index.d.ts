import { Lexer, Token } from "re-lex-ation";
import { VNode } from "vue";

declare class SpanVue {
  constructor(
    clazz: string,
    value: string,
  );
}

declare interface ITokenMapper<TKind> {
  map(token: Token<TKind>): SpanVue | null;
}

declare class HighlighterVue<TKind> {
  constructor(
    lexer: Lexer<TKind>,
    tokenMap: ITokenMapper<TKind>,
  );

  toVNode(): VNode;
}
