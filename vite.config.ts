import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root base in dev to avoid warnings; project base in build for GitHub Pages
  base: command === 'build' ? '/SHPE_Website/' : '/',
  assetsInclude: ['**/*.pdf', '**/*.docx'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))