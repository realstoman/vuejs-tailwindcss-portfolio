<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<SingleProjectHeader />

		<!-- Project gallery -->
		<SingleProjectGallery />

		<!-- Project information -->
		<SingleProjectInfo />

		<hr class="mt-10 sm:mt-20 text-ternary-dark dark:text-ternary-dark" />

		<!-- Project related projects -->
		<SingleProjectRelatedProjects />
	</div>
</template>

<script>
import SingleProjectHeader from '@/components/project/SingleProjectHeader';
import SingleProjectGallery from '@/components/project/SingleProjectGallery';
import SingleProjectInfo from '@/components/project/SingleProjectInfo';
import SingleProjectRelatedProjects from '@/components/project/SingleProjectRelatedProjects';
import feather from 'feather-icons';

export default {
	name: 'Projects',
	components: {
		SingleProjectHeader,
		SingleProjectGallery,
		SingleProjectInfo,
		SingleProjectRelatedProjects,
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
