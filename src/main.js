import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import axios from 'axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'https://vocabulary-learn-backend.onrender.com/'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed';
axios.defaults.withCredentials = false;
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config
});

app.use(createPinia())
app.use(router)

app.mount('#app')
