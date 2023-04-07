import { IContextManager, Lexer, Token } from "./lexer";

export type VueTokenKind =
  | "OPEN_PAREN"
  | "CLOSE_PAREN"
  | "OPEN_CURLY"
  | "CLOSE_CURLY"
  | "OPEN_ANGLE"
  | "CLOSE_ANGLE"
  | "OPEN_ANGLE_SLASH"
  | "SEMICOLON"
  | "DOT"
  | "EOF"
  | "KEYWORD"
  | "SYMBOL"
  | "PROPERTY"
  | "STRING_LITERAL"
  | "INTERPOLATED_STRING_LITERAL"
  | "STRING"
  | "SLASH"
  | "COLON"
  | "EQUALS"
  | "HASH"
  | "OTHER"
;

const literalTokens: Token<VueTokenKind>[] = [
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
    value: "</",
    kind: "OPEN_ANGLE_SLASH",
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

const stringLiteralTokens: Token<VueTokenKind>[] = [
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

export class VueLexer extends Lexer<VueTokenKind> {
  constructor(
    content: string
  ) {
    super(
      content,
      ["@media"],
      literalTokens,
      stringLiteralTokens,
      [
        new HtmlTagContextManager(),
        new CssPropertyContextManager(),
      ],
    );
  }
}

class HtmlTagContextManager implements IContextManager<VueTokenKind> {
  private openingHtmlTag: boolean = false;
  private closingHtmlTag: boolean = false;
  private inHtmlTag: boolean = false;
  private hashHtmlProperty: boolean = false;

  public apply(token: Token<VueTokenKind>): VueTokenKind | null {
    if (token.kind === "OPEN_ANGLE") {
      this.openingHtmlTag = true;
      this.inHtmlTag = true;
      return null;
    }

    if (token.kind === "OPEN_ANGLE_SLASH") {
      this.closingHtmlTag = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.openingHtmlTag) {
      this.openingHtmlTag = false;
      return "KEYWORD";
    }

    if (token.kind === "SYMBOL" && this.hashHtmlProperty) {
      this.hashHtmlProperty = false;
      return "PROPERTY";
    }

    if (token.kind === "SYMBOL" && this.closingHtmlTag) {
      this.closingHtmlTag = false;
      return "KEYWORD";
    }

    if (token.kind === "HASH" && this.inHtmlTag) {
      this.hashHtmlProperty = true;
      return null;
    }

    if (token.kind === "CLOSE_ANGLE")
      this.inHtmlTag = false;

    this.closingHtmlTag = false;
    this.openingHtmlTag = false;
    this.hashHtmlProperty = false;
    return null;
  }
}

class CssPropertyContextManager implements IContextManager<VueTokenKind> {
  private inContext: boolean = false;

  private opensContext = (token: Token<VueTokenKind>) =>
    token.kind === "COLON";

  private closesContext = (token: Token<VueTokenKind>) =>
    this.inContext && (
      token.kind === "SEMICOLON" || token.kind === "CLOSE_PAREN"
    );

  public apply(token: Token<VueTokenKind>): VueTokenKind | null {
    if (this.opensContext(token)) {
      this.inContext = true;
      return null;
    }

    if (token.kind === "SYMBOL" && this.inContext)
      return "PROPERTY";

    if (this.closesContext(token)) {
      this.inContext = false;
      return null;
    }

    return null;
  }
}
