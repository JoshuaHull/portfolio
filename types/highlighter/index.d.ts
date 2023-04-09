import { Lexer, Token } from "re-lex-ation";
import { VNode } from "vue";

declare class Span {
  constructor(
    clazz: string,
    value: string,
  );
}

declare interface ITokenMapper<TKind> {
  map(token: Token<TKind>): Span | null;
}

declare class Highlighter<TKind> {
  constructor(
    lexer: Lexer<TKind>,
    tokenMap: ITokenMapper<TKind>,
  );

  toHtml(): string;

  toVNode(): VNode;
}
