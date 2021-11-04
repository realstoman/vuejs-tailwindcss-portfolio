<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectSingleHeader />

		<!-- Project gallery -->
		<ProjectSingleGallery />

		<!-- Project information -->
		<ProjectSingleInfo />

		<!-- Project related projects -->
		<ProjectSingleRelatedProjects />
	</div>
</template>

<script>
import feather from 'feather-icons';
import ProjectSingleHeader from '../components/ProjectSingleHeader.vue';
import ProjectSingleGallery from '../components/ProjectSingleGallery.vue';
import ProjectSingleInfo from '../components/ProjectSingleInfo.vue';
import ProjectSingleRelatedProjects from '../components/ProjectSingleRelatedProjects.vue';

export default {
	name: 'Projects',
	components: {
		ProjectSingleHeader,
		ProjectSingleGallery,
		ProjectSingleInfo,
		ProjectSingleRelatedProjects,
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
