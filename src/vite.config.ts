import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {dirname, resolve} from "node:path";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log(env.VITE_DEFAULT_LOCALE)
  return {
    plugins: [
      vue(),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@local': fileURLToPath(new URL('./src/data/' + env.VITE_DEFAULT_LOCALE, import.meta.url)),
      }
    },
    build: {
      chunkSizeWarningLimit: 1600,
      outDir: "../app/bilumix/" + env.VITE_DEFAULT_LOCALE + "/",
      emptyOutDir: true
    }
  }
})
