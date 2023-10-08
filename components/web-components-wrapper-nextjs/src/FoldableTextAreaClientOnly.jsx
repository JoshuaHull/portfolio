"use client";

import React from "react";
import { registerFoldableTextArea } from "@fullstackjosh/web-components/FoldableTextArea";

/**
 * @type {import("./FoldableTextAreaClientOnly").FoldableTextAreaClientOnly}
 */
export const FoldableTextAreaClientOnly = (props) => {
  registerFoldableTextArea();
  return <fsj-foldable-textarea {...props} />;
};
