"use client";

import React from "react";
import { FoldablePanelProps, registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

type FoldablePanelClientProps = FoldablePanelProps;

export const FoldablePanelClient = (props: FoldablePanelClientProps) => {
  registerFoldablePanel();
  return <fsj-foldable-panel {...props}></fsj-foldable-panel>
};
