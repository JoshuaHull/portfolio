import type { Preview } from "@storybook/react";
import "./../app/globals.css";
import { FsjProviderDecorator } from "./decorators/FsjProviderDecorator";

const preview: Preview = {
  decorators: [FsjProviderDecorator],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
