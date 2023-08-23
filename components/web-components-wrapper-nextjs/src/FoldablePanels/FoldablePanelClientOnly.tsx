"use client";

import React from "react";
import { FoldablePanelProps, registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

export const FoldablePanelClientOnly = (props: FoldablePanelProps) => {
  registerFoldablePanel();
  return <fsj-foldable-panel {...props}></fsj-foldable-panel>
};
