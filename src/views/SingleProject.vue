<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Projects start -->
		<SingleProjectHeader />
		<!-- Projects end -->

		<!-- Projects start -->
		<SingleProjectGallery />
		<!-- Projects end -->

		<!-- Projects start -->
		<SingleProjectInfo />
		<!-- Projects end -->

		<hr class="mt-10 sm:mt-20 text-ternary-dark dark:text-ternary-dark" />

		<!-- Projects start -->
		<SingleProjectRelatedProjects />
		<!-- Projects end -->
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
