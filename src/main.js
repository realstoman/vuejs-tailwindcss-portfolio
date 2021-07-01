import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/tailwind.css'

const feather = require('feather-icons')
feather.replace()

createApp(App).mount('#app')
