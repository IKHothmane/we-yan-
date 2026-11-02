import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['tests/**/*.test.{js,ts,tsx}'],
    environment: 'node',
    // Les tests React (.tsx) tournent dans jsdom.
    environmentMatchGlobs: [['tests/**/*.tsx', 'jsdom']],
    setupFiles: ['tests/setup.ts'],
  },
})
