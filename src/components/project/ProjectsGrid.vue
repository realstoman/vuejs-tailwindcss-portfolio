<template>
	<!-- Projects start -->
	<section class="pt-20 sm:pt-28">
		<!-- Projects grid title start -->
		<div class="text-center">
			<p
				class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light"
			>
				Projects Portfolio
			</p>
			<p class="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
				Some of the projects I have successfully completed
			</p>
		</div>
		<!-- Projects grid title end -->

		<!-- Projects grid start -->
		<div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
			<router-link
				v-for="project in projects"
				:key="project.id"
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						:src="project.img"
						:alt="project.title"
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						{{ project.title }}
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>{{ project.category }}</span
					>
				</div>
			</router-link>
		</div>
		<!-- Projects grid end -->

		<!-- Load more projects button start -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<button
				class="flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white text-lg sm:text-xl font-medium"
			>
				<i data-feather="refresh-cw" class="w-5 mr-3"></i>
				<span>Load More</span>
			</button>
		</div>
		<!-- Load more projects button end -->
	</section>
	<!-- Projects end -->
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Projects',
	data() {
		return {
			projects: [
				{
					id: 1,
					title: 'Google Health Platform',
					category: 'Wen Application',
					img: require('../../assets/images/web-project-2.jpg'),
				},
				{
					id: 2,
					title: 'Pheonix Digital Agenncy',
					category: 'Mobile Application',
					img: require('../../assets/images/mobile-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Project Management UI',
					category: 'UI / Frontend',
					img: require('../../assets/images/ui-project-1.jpg'),
				},
				{
					id: 4,
					title: 'Cloud Storage Platform',
					category: 'UI / Frontend',
					img: require('../../assets/images/ui-project-2.jpg'),
				},
				{
					id: 5,
					title: 'Kabul Social App',
					category: 'Mobile Application',
					img: require('../../assets/images/mobile-project-1.jpg'),
				},
				{
					id: 6,
					title: 'Apple Design System',
					category: 'Web Application',
					img: require('../../assets/images/web-project-1.jpg'),
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
