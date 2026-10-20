import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import reactRefresh from 'eslint-plugin-react-refresh'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

/** Scope aligné sur l’ancien `--ext js,jsx` (TS/config hors périmètre jusqu’à parser TS). */
export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '.eslintrc.cjs',
      'eslint.config.js',
      'vite.config.js',
      'scripts/**',
      'functions/**',
      '**/*.{ts,tsx}',
    ],
  },
  ...compat.config({
    env: { browser: true, es2020: true, node: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.3' } },
    rules: {
      'react/jsx-no-target-blank': 'off',
    },
  }),
  {
    files: ['**/*.{js,jsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]
