// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://efrainsiccha.github.io',
  base: '/love-return',
  vite: {
    plugins: [tailwindcss()],
  },
});
