<template>
	<div :class="appTheme">
		<!-- Header Start -->
		<Header></Header>

		<!-- Render Active Component Contents Start -->
		<transition name="fade" mode="out-in">
			<router-view :theme="appTheme" />
		</transition>

		<!-- Footer Start -->
		<Footer></Footer>
	</div>
</template>

<script>
import feather from 'feather-icons';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

export default {
	components: {
		Header,
		Footer,
	},
	data: () => {
		return {
			appTheme: localStorage.getItem('theme'),
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.fade-enter-active {
	animation: coming 0.4s;
	animation-delay: 0.2s;
	opacity: 0;
}

.fade-leave-active {
	animation: going 0.4s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}

	to {
		transform: translateX(-10px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-10px);
		opacity: 0;
	}

	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
