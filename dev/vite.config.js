import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import ViteComponents from 'vite-plugin-components';

export default defineConfig({
  plugins: [createVuePlugin(), ViteComponents()],
  server: { port: 3001 }
})
