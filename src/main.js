import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSplide from '@splidejs/vue-splide'

// Default theme
import '@splidejs/vue-splide/css'

// or other themes
import '@splidejs/vue-splide/css/skyblue'
import '@splidejs/vue-splide/css/sea-green'

// or only core styles
import '@splidejs/vue-splide/css/core'


const app = createApp(App)


app.use(createPinia())
app.use(router)

app.use(VueSplide)


// Vant
import 'vant/lib/index.css'
import { Locale, Dialog, Step, Steps, Form, Field, CellGroup, ConfigProvider } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'

app.use(ConfigProvider)

Locale.use('en-US', enUS)
app.use(Dialog)

app.use(Form)
app.use(Field)
app.use(CellGroup)

app.use(Step)
app.use(Steps)

//Cookies
import VueCookies from 'vue-cookies'
app.use(VueCookies)

app.mount('#app')
