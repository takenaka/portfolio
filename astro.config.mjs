import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://takenaka.work',
  output: 'static',
  build: {
    format: 'directory',
  },
});
