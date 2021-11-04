<template>
	<!-- Projects start -->
	<section class="pt-20 sm:pt-28">
		<!-- Projects grid title start -->
		<div class="text-center">
			<p
				class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
			<p class="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
				{{ projectsDescription }}
			</p>
		</div>
		<!-- Projects grid title end -->

		<!-- Projects grid start -->
		<div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
			<ProjectSingle
				v-for="project in projects"
				:key="project.id"
				:project="project"
			/>
		</div>
		<!-- Projects grid end -->

		<!-- Load more projects button start -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl font-medium"
				aria-label="More Projects"
				>More Projects</router-link
			>
		</div>
		<!-- Load more projects button end -->
	</section>
	<!-- Projects end -->
</template>

<script>
import feather from 'feather-icons';
import ProjectSingle from './ProjectSingle.vue';

export default {
	name: 'Projects',
	components: { ProjectSingle },
	data() {
		return {
			projectsHeading: 'Projects Portfolio',
			projectsDescription:
				'Some of the projects I have successfully completed',
			projects: [
				{
					id: 1,
					title: 'Google Health Platform',
					category: 'Web Application',
					img: require('@/assets/images/web-project-2.jpg'),
				},
				{
					id: 2,
					title: 'Pheonix Digital Agenncy',
					category: 'Mobile Application',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Project Management UI',
					category: 'UI / Frontend',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 4,
					title: 'Cloud Storage Platform',
					category: 'UI / Frontend',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 5,
					title: 'Kabul Social App',
					category: 'Mobile Application',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 6,
					title: 'Apple Design System',
					category: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
			],
			// publicPath: process.env.BASE_URL,
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

<style scoped></style>
