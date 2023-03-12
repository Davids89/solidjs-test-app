import { defineConfig } from 'vitest/config';
import common from './vite.common';

export default defineConfig({
  ...common,
  test: {
    setupFiles: './setupTests.ts',
    globals: true,
  }
})