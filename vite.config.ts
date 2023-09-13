import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 启动后打开浏览器
  server: {
    open: true,
    host: "127.0.0.1",
    port: 3000
  }
})
