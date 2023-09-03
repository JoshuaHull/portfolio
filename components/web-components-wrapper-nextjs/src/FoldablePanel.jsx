"use server";

import { getFoldablePanelHtmlTemplate } from "@fullstackjosh/web-components/FoldablePanel";
import dynamic from "next/dynamic";
import React from "react";

export async function FoldablePanel(props) {
  const FoldablePanelClientOnly = dynamic(async () => {
    const { FoldablePanelClientOnly } = await import("./FoldablePanelClientOnly.jsx");
    return { default: FoldablePanelClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getFoldablePanelHtmlTemplate();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <FoldablePanelClientOnly {...props} />;
}