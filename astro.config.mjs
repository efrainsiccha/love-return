// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://efrainsiccha.github.io',
  base: '/love-return',
  vite: {
    plugins: [tailwindcss()],
  },
});
