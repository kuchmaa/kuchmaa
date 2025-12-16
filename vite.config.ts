import { ghPages } from 'vite-plugin-gh-pages';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [
    solid(),
    ghPages({
      branch: 'gh-pages',
    }),
    tailwindcss(),
  ],
  base: mode === 'development' ? '/' : '/kuchmaa/',
  build: {
    target: 'esnext',
  },
}));
