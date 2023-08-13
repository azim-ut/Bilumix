import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/logo.svg'
import './assets/header.css'
import './assets/grid.css'
import './assets/shop.css'
import './assets/cart.css'
const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars , faTrash, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {createPinia} from "pinia";

library.add(faBars,faTrash, faShoppingBag)

app
    .use(router)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
