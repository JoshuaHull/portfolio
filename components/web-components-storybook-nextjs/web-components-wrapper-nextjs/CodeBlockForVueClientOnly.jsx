"use client";

import React from "react";
import { registerCodeBlockForVue } from "@fullstackjosh/web-components/CodeBlockForVue";

/**
 * @type {import("./CodeBlockForVueClientOnly").CodeBlockForVueClientOnly}
 */
export const CodeBlockForVueClientOnly = (props) => {
  registerCodeBlockForVue();
  return <fsj-code-block-for-vue {...props} />;
};
