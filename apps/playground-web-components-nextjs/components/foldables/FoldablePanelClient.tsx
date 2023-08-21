"use client";

import React from "react";
import { PropsWithChildren } from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";

type FoldablePanelClientProps = PropsWithChildren & {
  checkboxId: string;
  defaultChecked: boolean;
  panelTitle: string;
  panelContent: string;
};

export const FoldablePanelClient = (props: FoldablePanelClientProps) => {
  registerFoldablePanel();
  return <fsj-foldable-panel {...props}></fsj-foldable-panel>
};
