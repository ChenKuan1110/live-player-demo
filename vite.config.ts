import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSSL from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // basicSSL()
  ],
  base: '/live-player-demo/',
  server: {
    // https: true,
    host: '0.0.0.0'
  }
})
