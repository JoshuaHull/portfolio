"use client";

import React from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

export const FoldablePanelClientOnly = (props) => {
  registerFoldablePanel();
  return React.createElement("fsj-foldable-panel", props);
};
