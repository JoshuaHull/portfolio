"use server";

import { getFoldablePanelHtmlTemplate } from "@fullstackjosh/web-components/FoldablePanel";
import React from "react";

export async function FoldablePanel(props) {
  const FoldablePanelClientOnly = dynamic(async () => {
    const { FoldablePanelClientOnly } = await import("./FoldablePanelClientOnly.mjs");
    return { default: FoldablePanelClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getFoldablePanelHtmlTemplate();
      const html = template(props);
      return React.createElement(
        "div",
        {
          style: {
            display: "contents"
          },
          dangerouslySetInnerHTML: {
            __html: html
          },
        }
      );
    },
  });

  return React.createElement(FoldablePanelClientOnly, props);
}
