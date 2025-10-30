import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import restart from 'vite-plugin-restart'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [
    react(),
    glsl(), // Support GLSL files
    restart({ restart: ['../static/**'] }) // Restart server on static file change
  ],
  base: '/PortFolio/', // 👈 Use your repo name here
  root: 'src/', // Source files (where index.html is)
  publicDir: '../static/', // Static assets
  server: {
    host: true,
    open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env)
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true
  }
})
