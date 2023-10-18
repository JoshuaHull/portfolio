"use server";

import { getCodeBlockForTypescriptTemplate } from "@fullstackjosh/web-components/CodeBlockForTypescriptTemplate";
import dynamic from "next/dynamic";
import React from "react";

/**
 * @type {import("./CodeBlockForTypescript").CodeBlockForTypescript}
 */
export async function CodeBlockForTypescript(props) {
  const CodeBlockForTypescriptClientOnly = dynamic(async () => {
    const { CodeBlockForTypescriptClientOnly } = await import("./CodeBlockForTypescriptClientOnly.jsx");
    return { default: CodeBlockForTypescriptClientOnly };
  }, {
    ssr: false,
    loading: () => {
      const template = getCodeBlockForTypescriptTemplate();
      const html = template(props);
      return (
        <div
          style={{ display: "contents" }}
          dangerouslySetInnerHTML= {{ __html: html }}
        />
      );
    },
  });

  return <CodeBlockForTypescriptClientOnly {...props} />;
}
