/// <reference types="vitest/config" />
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/vitest.setup.ts'],
    globals: true,
    css: true,
    testTimeout: 10000,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', 'text-summary', 'lcov'],
      include: ['src/**/*.{ts,tsx}'], // Files to include for coverage
      exclude: [
        '**/*.config.{js,ts}',
        'node_modules',
        '**/*.{css,scss}',
        'src/**/*.test.tsx', // Test files themselves are often excluded
        'src/vitest.setup.ts',
        'src/vite-env.d.ts',
        'src/main.tsx'
      ],
    }
  },
});