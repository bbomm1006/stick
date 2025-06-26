import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/stickb/', // ← 여기 꼭 이렇게!
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  scss: {
    additionalData: `@use "@/styles/_variables.scss" as *;`
  }

})
