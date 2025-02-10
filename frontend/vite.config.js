import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5002,
    proxy: {
      '/api': {
        target: 'https://dashas-mock-server.vercel.app',
      },
      '/socket.io': {
        target: 'https://dashas-mock-server.vercel.app',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
})
