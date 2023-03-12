import { defineConfig } from 'vite';
import common from './vite.common';

export default defineConfig({
  ...common,
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    target: 'esnext',
  }
});
