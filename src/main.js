import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import './assets/css/tailwind.css'
import Home from './components/Home'
import About from './components/About'
import router from './router'

const feather = require('feather-icons')
feather.replace()

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).use(router).mount('#app')
