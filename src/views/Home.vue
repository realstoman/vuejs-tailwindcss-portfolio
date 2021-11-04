<template>
	<div class="container mx-auto">
		<!-- Banner start -->
		<AppBanner />
		<!-- Banner snd -->

		<!-- Projects start -->
		<ProjectsGrid />
		<!-- Projects end -->
	</div>
</template>

<script>
import AppBanner from '@/components/AppBanner';
import ProjectsGrid from '@/components/project/ProjectsGrid';
import feather from 'feather-icons';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
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
