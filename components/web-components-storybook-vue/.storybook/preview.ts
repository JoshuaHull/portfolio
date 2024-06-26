import type { Preview } from "@storybook/vue3";
import "../src/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (_, { parameters }) => ({
      template: `<div data-theme="${parameters.theme ?? "light"}"><story /></div>`,
    }),
  ],
};

export default preview;
