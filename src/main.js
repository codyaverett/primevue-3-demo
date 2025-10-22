import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

// PrimeVue CSS
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

// Global styles
import './assets/styles/global.css'

const app = createApp(App)

app.use(PrimeVue, {
  ripple: true,
  inputStyle: 'outlined'
})
app.use(router)

app.mount('#app')
