import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import * as path from 'path';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
