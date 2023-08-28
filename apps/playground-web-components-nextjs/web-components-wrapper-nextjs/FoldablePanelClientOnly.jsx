"use client";

import React from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

export const FoldablePanelClientOnly = (props) => {
  registerFoldablePanel();
  return <fsj-foldable-panel {...props} />;
};
