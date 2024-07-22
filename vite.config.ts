import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

import autoprefixer from "autoprefixer";

export default defineConfig(({mode, command}) => {
  console.log('vite config: ', {mode, command})
  return {
    plugins: [vue()],
    css: {
      postcss: {
        plugins: [autoprefixer()]
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/css/variables/variables.scss";`
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
