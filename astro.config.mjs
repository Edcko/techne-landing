// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/techne/',
  vite: {
    plugins: [tailwindcss()],
  },
});
