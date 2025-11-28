import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages 根目录
  build: {
    outDir: 'dist'
  }
})