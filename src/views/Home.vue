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
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
	},
};
</script>

<style scoped></style>
