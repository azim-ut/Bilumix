import '@/assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/logo.svg'
import './assets/header.css'
const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

app
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
