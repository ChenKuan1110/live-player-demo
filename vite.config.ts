import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSSL from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // basicSSL()
  ],
  server: {
    // https: true,
    host: '0.0.0.0'
  }
})
