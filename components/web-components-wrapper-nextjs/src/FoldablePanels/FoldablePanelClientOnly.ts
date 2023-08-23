"use client";

import React from "react";
import { FoldablePanelProps, registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

export const FoldablePanelClientOnly = (props: FoldablePanelProps) => {
  registerFoldablePanel();
  return React.createElement("fsj-foldable-panel", props);
};
