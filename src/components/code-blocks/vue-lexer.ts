import { Lexer, Token, TokenKind } from "./lexer";

const literalTokens: Token[] = [
  {
    value: "(",
    kind: "OPEN_PAREN",
  },
  {
    value: ")",
    kind: "CLOSE_PAREN",
  },
  {
    value: "{",
    kind: "OPEN_CURLY",
  },
  {
    value: "}",
    kind: "CLOSE_CURLY",
  },
  {
    value: "<",
    kind: "OPEN_ANGLE",
  },
  {
    value: ">",
    kind: "CLOSE_ANGLE",
  },
  {
    value: ".",
    kind: "DOT",
  },
  {
    value: ":",
    kind: "COLON",
  },
  {
    value: ";",
    kind: "SEMICOLON",
  },
  {
    value: "/",
    kind: "SLASH",
  },
  {
    value: "=",
    kind: "EQUALS",
  },
  {
    value: "#",
    kind: "HASH",
  },
];

const stringLiteralTokens: Token[] = [
  {
    value: "\"",
    kind: "STRING_LITERAL",
  },
  {
    value: "'",
    kind: "STRING_LITERAL",
  },
  {
    value: "`",
    kind: "INTERPOLATED_STRING_LITERAL",
  },
];

const vueKeywords: string[] = [
];

const vueContextualKeywords: string[] = [
  // all html tags, i don't have internet right now so can't look them up :/
  "template", "script", "style",
  "article", "section", "div", "span",
  "@media"
];

/**
  TODO:
  Syntax highlighting for Vue is proving how not-up-to-scratch
  this context object is.
  I don't think inheritance of Lexer.ts is going to work long
  term either.
  I think the CSharpLexer and VueLexer should both take a Lexer
  as composition. Then call each of the consume methods as
  needed. That will allow each class to manage the context
  in a fine-tuned way.
*/

type ContextMap = {
  [kind in TokenKind]?: {
    kind?: TokenKind;
    close?: string;
    open?: string;
  };
};

const vueContextMap: ContextMap = {
  "COLON": {
    open: "value",
  },
  "HASH": {
    open: "value",
  },
  "SYMBOL": {
    open: "value",
    kind: "PROPERTY",
  },
  "SEMICOLON": {
    close: "value",
  },
  "CLOSE_PAREN": {
    close: "value",
  },
  "CLOSE_ANGLE": {
    close: "value",
  },
};

export class VueLexer extends Lexer {
  private contextMap: ContextMap;
  private contexts: string[];

  constructor(
    content: string
  ) {
    super(
      content,
      vueKeywords.concat(vueContextualKeywords),
      literalTokens,
      stringLiteralTokens,
    );

    this.contextMap = vueContextMap;
    this.contexts = [];
  }

  protected override mutateContext(token: Token): TokenKind | null {
    const context = this.contextMap[token.kind];

    if (!context)
      return null;

    if (context.open && context.kind) {
      const idx = this.contexts.findIndex(c => c === context.open);

      if (idx < 0)
        return null;

      return context.kind;
    }

    if (context.open && !context.kind)
      this.contexts.push(context.open);

    const idx = this.contexts.findIndex(c => c === context.close);

    if (idx < 0)
      return null;

    this.contexts.splice(idx, 1)

    return context.kind || null;
  }
}
