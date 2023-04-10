export type Token<TKind> = {
  value: string;
  kind:
    | TKind
    | "EOF"
    | "OTHER"
    | "STRING"
    | "KEYWORD"
    | "SYMBOL"
    | "NUMBER"
    | "COMMENT"
    | "BEGIN_LINE_COMMENT"
  ;
};

export interface IContextManager<TKind> {
  apply(token: Token<TKind>): TKind | null;
}

export abstract class Lexer<TKind> {
  constructor(
    content: string,
    keywords: string[],
    literals: Token<TKind>[],
    stringLiterals: Token<TKind>[],
    contextManagers: IContextManager<TKind>[],
  );

  protected mutateContext(token: Token<TKind>): TKind | null;

  public next(): Token<TKind>;
}
