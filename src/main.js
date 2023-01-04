import { createApp } from 'vue'

import router from './router'
import store from './stores/store'
import { createPinia } from 'pinia'
import i18n from './i18n'

import App from './App.vue'

// CSS
import './assets/styles/op.css'
import './assets/styles/opwebui.css'

import { Modal, Dropdown, Tooltip, Toast, Popover } from 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

// Pinia
const pinia = createPinia()

// App Creation
const app = createApp(App)

app.use(router)
app.use(store)
app.use(pinia)
app.use(i18n)

app.mount('#app')