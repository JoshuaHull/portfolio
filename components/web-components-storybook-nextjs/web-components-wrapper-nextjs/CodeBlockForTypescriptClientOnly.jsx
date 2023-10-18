"use client";

import React from "react";
import { registerCodeBlockForTypescript } from "@fullstackjosh/web-components/CodeBlockForTypescript";

/**
 * @type {import("./CodeBlockForTypescriptClientOnly").CodeBlockForTypescriptClientOnly}
 */
export const CodeBlockForTypescriptClientOnly = (props) => {
  registerCodeBlockForTypescript();
  return <fsj-code-block-for-typescript {...props} />;
};
