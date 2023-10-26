"use client";

import React from "react";
import { registerCodeBlockForCSharp } from "@fullstackjosh/web-components/CodeBlockForCSharp";

/**
 * @type {import("./CodeBlockForCSharpClientOnly").CodeBlockForCSharpClientOnly}
 */
export const CodeBlockForCSharpClientOnly = (props) => {
  registerCodeBlockForCSharp();
  return <fsj-code-block-for-csharp {...props} />;
};
