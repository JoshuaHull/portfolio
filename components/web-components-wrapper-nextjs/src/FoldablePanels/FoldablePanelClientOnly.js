"use client";

import React from "react";
import { registerFoldablePanel } from "@fullstackjosh/web-components/FoldablePanel";
import * as Types from "./index.d.ts";

/**
 * @type {Types.FoldablePanelClientOnly}
 */
export const FoldablePanelClientOnly = (props) => {
  registerFoldablePanel();
  return React.createElement("fsj-foldable-panel", props);
};
