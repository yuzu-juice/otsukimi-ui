import type { Preview } from "@storybook/react-vite";
import "../src/foundations/tokens.css";
import "../src/components/button/button.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
