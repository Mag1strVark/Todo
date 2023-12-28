import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      hooks: '/src/hooks',
      store: '/src/store',
      utils: '/src/utils',
    },
  },
})
