import { createApp } from 'vue'
import App from './App.vue'
import Axios from 'axios'

const app = createApp(App)

Axios.defaults.baseURL = process.env.VUE_APP_API_CALLBACK
app.config.globalProperties.$axios = Axios

app.mount('#app')
