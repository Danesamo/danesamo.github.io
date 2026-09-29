// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Published as a GitHub Pages user site: the repository must be named "danesamo.github.io".
export default defineConfig({
  site: 'https://danesamo.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});