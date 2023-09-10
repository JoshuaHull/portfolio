"use client";

import React from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

/**
 * @type {import("./FoldablePanelClientOnly").FoldablePanelClientOnly}
 */
export const FoldablePanelClientOnly = (props) => {
  registerFoldablePanel();
  return <fsj-foldable-panel {...props} />;
};
