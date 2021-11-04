<template>
	<div class="container mx-auto">
		<!-- Banner start -->
		<AppBanner />
		<!-- Banner snd -->

		<!-- Projects start -->
		<Projects />
		<!-- Projects end -->
	</div>
</template>

<script>
import feather from 'feather-icons';
import AppBanner from '@/components/AppBanner';
import Projects from '../components/Projects.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		Projects,
	},
	data: () => {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<style scoped></style>
