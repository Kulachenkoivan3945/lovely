import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import piniaPersist from 'pinia-plugin-persistedstate';
import router from './router'
const pinia = createPinia()
pinia.use(piniaPersist);
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        aliases,
        defaultSet: 'mdi',
        sets: {
            mdi,
        },
    },
})

createApp(App).use(router).use(pinia).use(vuetify).mount('#app')
