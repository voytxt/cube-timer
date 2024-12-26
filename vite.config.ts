import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],

  // https://github.com/cubing/cubing.js/issues/323
  worker: { format: 'es' },
  optimizeDeps: { exclude: ['cubing'] },
});
