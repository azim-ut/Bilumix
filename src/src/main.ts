import '@/assets/main.css'
import '@/assets/font-rem.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/logo.svg'
import './assets/header.css'
import './assets/grid.css'
import './assets/shop.css'
import './assets/cart.css'
import './assets/slider.css'
const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBars, faTrash, faShoppingBag, faEnvelope, faCirclePlay, faArrowRight, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faSquare, faSquareCheck, faPaperPlane} from '@fortawesome/free-regular-svg-icons'
import {createPinia} from "pinia";
import localeMessages from "@intlify/unplugin-vue-i18n/messages"
import pluralization from "./i18n/rules/pluralization"
import {createI18n} from "vue-i18n";

export const i18n = createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE,
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
    legacy: false,
    globalInjection: true,
    messages: localeMessages,
    pluralRules: pluralization
})

library.add(faBars,faTrash, faPaperPlane, faShoppingBag, faEnvelope, faCirclePlay, faArrowRight, faArrowDown)
library.add(faSquare, faSquareCheck)

app
    .use(router)
    .use(createPinia())
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
