// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// 静的書き出し。Cloudflare Pages / Vercel は `npm run build` の成果物 `dist/` を公開する。
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
