import type { Preview } from '@storybook/sveltekit';
import './storybook.css';

// Inject design tokens globally into all stories
const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark',    value: '#0D1117' },
        { name: 'surface', value: '#111D27' },
        { name: 'light',   value: '#FFFFFF' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    layout: 'padded',
  },
  decorators: [
    (story) => ({
      Component: story,
      props: {},
    }),
  ],
};

export default preview;
