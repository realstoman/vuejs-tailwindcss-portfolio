import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/app.css';

const feather = require('feather-icons');
feather.replace();

createApp(App)
	.use(router)
	.mount('#app');
