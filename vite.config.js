import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: ['./jest-setup.js'],
    environment: 'jsdom',
    globals: true,
  },
});
