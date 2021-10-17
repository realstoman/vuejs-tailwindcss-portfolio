<template>
	<div :class="appTheme" class="pt-0.5">
		<!-- App header -->
		<Header></Header>

		<!-- Render active component contents with transition -->
		<transition name="fade" mode="out-in">
			<router-view :theme="appTheme" />
		</transition>

		<back-to-top
			visibleoffset="500"
			right="40px"
			bottom="40px"
			class="shadow-lg"
		>
			<i data-feather="arrow-up"></i>
		</back-to-top>

		<!-- App footer -->
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

.vue-back-to-top {
	@apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
	border-radius: 50%;
	font-size: 22px;
	line-height: 22px;
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
