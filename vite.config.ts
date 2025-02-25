import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],

  // https://github.com/cubing/cubing.js/issues/323
  worker: { format: 'es' },
  optimizeDeps: { exclude: ['cubing'] },
});
