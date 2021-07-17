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

const appTheme = localStorage.getItem('theme');

if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-primary-light');
}
