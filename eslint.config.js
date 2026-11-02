import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat.recommended,
  prettier,
  {
    settings: { react: { version: '18.3' } },
    rules: {
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    // Point d'entrée : pas d'export, le fast refresh n'y s'applique pas
    files: ['src/main.tsx'],
    rules: { 'react-refresh/only-export-components': 'off' },
  },
  {
    // Code serveur / outillage : Node, Cloudflare Workers
    files: [
      'functions/**/*.js',
      'tests/**/*.js',
      'shared/**/*.js',
      'scripts/**/*.{js,mjs}',
      'vite.config.js',
    ],
    languageOptions: { globals: { ...globals.node, ...globals.serviceworker } },
  },
  {
    // Script exécuté dans Google Apps Script
    files: ['scripts/google-apps-script.js'],
    languageOptions: { globals: { ...globals.googleappsscript } },
    rules: { '@typescript-eslint/no-unused-vars': 'off', 'no-undef': 'off' },
  }
)
