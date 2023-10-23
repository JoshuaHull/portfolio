"use server";

import { getCodeBlockForVueTemplate } from "@fullstackjosh/web-components/CodeBlockForVueTemplate";
import dynamic from "next/dynamic";
import React from "react";

/**
 * @type {import("./CodeBlockForVue").CodeBlockForVue}
 */
export async function CodeBlockForVue(props) {
  const CodeBlockForVueClientOnly = dynamic(async () => {
    const { CodeBlockForVueClientOnly } = await import("./CodeBlockForVueClientOnly.jsx");
    return { default: CodeBlockForVueClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getCodeBlockForVueTemplate();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <CodeBlockForVueClientOnly {...props} />;
}
