import { Lexer, Token } from "re-lex-ation";

declare class SpanHtml {
  constructor(
    clazz: string,
    value: string,
  );
}

declare interface ITokenMapper<TKind> {
  map(token: Token<TKind>): SpanHtml | null;
}

declare class HighlighterHtml<TKind> {
  constructor(
    lexer: Lexer<TKind>,
    tokenMap: ITokenMapper<TKind>,
  );

  toHtml(): string;
}
