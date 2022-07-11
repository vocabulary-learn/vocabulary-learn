import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './index.css'

import axios from 'axios'
import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'https://vocabulary-learn-api.herokuapp.com/'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-fromurlencodeed';
axios.defaults.withCredentials = false;
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['X-CSRFToken'] = cookie.parse(document.cookie).csrftoken;
  return config
});

app.use(createPinia())
app.use(router)

app.mount('#app')
