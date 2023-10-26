"use server";

import { getCodeBlockForCSharpTemplate } from "@fullstackjosh/web-components/CodeBlockForCSharpTemplate";
import dynamic from "next/dynamic";
import React from "react";

/**
 * @type {import("./CodeBlockForCSharp").CodeBlockForCSharp}
 */
export async function CodeBlockForCSharp(props) {
  const CodeBlockForCSharpClientOnly = dynamic(async () => {
    const { CodeBlockForCSharpClientOnly } = await import("./CodeBlockForCSharpClientOnly.jsx");
    return { default: CodeBlockForCSharpClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getCodeBlockForCSharpTemplate();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <CodeBlockForCSharpClientOnly {...props} />;
}
