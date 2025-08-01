import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://apna-mandi-updated-server.onrender.com',
        changeOrigin: true,
      },
    },
  },
})
