<template>
	<div class="container mx-auto">
		<!-- Banner start -->
		<Banner />
		<!-- Banner snd -->

		<!-- Projects start -->
		<ProjectsGrid />
		<!-- Projects end -->
	</div>
</template>

<script>
import Banner from '@/components/home/Banner';
import ProjectsGrid from '@/components/project/ProjectsGrid';
import feather from 'feather-icons';

export default {
	name: 'Home',
	components: {
		Banner,
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
