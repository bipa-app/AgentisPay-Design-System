import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'BipaUI',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['svelte'],
      output: { globals: { svelte: 'Svelte' } },
    },
  },
});
