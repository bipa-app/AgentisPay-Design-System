import type { Preview } from '@storybook/sveltekit';
import './storybook.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'dark',  icon: 'moon', title: 'Dark'  },
          { value: 'light', icon: 'sun',  title: 'Light' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
  },
  decorators: [
    (story, context) => {
      const theme = (context.globals.theme ?? 'dark') as string;
      document.body.setAttribute('data-theme', theme);
      document.body.style.background = theme === 'light' ? '#F5F7FA' : '#0D1117';
      return { Component: story };
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    layout: 'padded',
  },
};

export default preview;
