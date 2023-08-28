import { fileURLToPath, URL } from 'node:url'

import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import {dirname, resolve} from "node:path";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const base = env.VITE_BASE
  let langTemp = env.VITE_DEFAULT_LOCALE
  if(base.length>1){
    langTemp = base.split("\/")[1]
  }
  const lang = langTemp
  console.log(lang, base)
  return {
    base: base,
    plugins: [
      vue(),
      VueI18nPlugin({
        include: resolve(dirname(fileURLToPath(import.meta.url)), './src/i18n/locales/**'),
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@local': fileURLToPath(new URL('./src/data/' + lang, import.meta.url)),
      }
    },
    build: {
      chunkSizeWarningLimit: 1600,
      outDir: "../app/bilumix/" + lang + "/",
      emptyOutDir: true
    }
  }
})
