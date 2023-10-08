"use server";

import { getFoldableTextAreaTemplate } from "@fullstackjosh/web-components/FoldableTextAreaTemplate";
import dynamic from "next/dynamic";
import React from "react";

/**
 * @type {import("./FoldableTextArea").FoldableTextArea}
 */
export async function FoldableTextArea(props) {
  const FoldableTextAreaClientOnly = dynamic(async () => {
    const { FoldableTextAreaClientOnly } = await import("./FoldableTextAreaClientOnly.jsx");
    return { default: FoldableTextAreaClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getFoldableTextAreaTemplate();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <FoldableTextAreaClientOnly {...props} />;
}
