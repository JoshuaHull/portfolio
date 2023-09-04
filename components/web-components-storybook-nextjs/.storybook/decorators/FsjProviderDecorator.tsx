import React from "react";
import { FsjProvider } from "../../web-components-wrapper-nextjs/FsjProvider";

export const FsjProviderDecorator = (Story: any) => (
  <FsjProvider>
    <Story />
  </FsjProvider>
);
