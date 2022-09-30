import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  build: {
    rollupOptions: {
      input: {
        setup: resolve(__dirname, 'graphics/setup/index.html'),
        'hd-solo': resolve(__dirname, 'graphics/hd-solo/index.html'),
        'hd-solo-with-cam': resolve(__dirname, 'graphics/hd-solo-with-cam/index.html'),
        'hd-race-2': resolve(__dirname, 'graphics/hd-race-2/index.html'),
        'sd-solo': resolve(__dirname, 'graphics/sd-solo/index.html'),
        'sd-race-2': resolve(__dirname, 'graphics/sd-race-2/index.html'),
        'gb-solo': resolve(__dirname, 'graphics/gb-solo/index.html'),
        'gba-solo': resolve(__dirname, 'graphics/gba-solo/index.html'),
        'score-attack-2': resolve(__dirname, 'graphics/gba-solo/index.html')
      },
      external: [
        /assets/
      ]
    }
  }
})
