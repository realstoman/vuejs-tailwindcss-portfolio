<template>
	<!-- Projects start -->
	<section class="pt-10 sm:pt-14">
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

		<!-- Filter and search projects start -->
		<div class="mt-10 sm:mt-16">
			<h3
				class="
          text-center text-secondary-dark
          dark:text-ternary-light
          text-md
          sm:text-xl
          font-normal
          mb-3
        "
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="
          flex
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-3
        "
			>
				<div class="flex justify-between gap-2">
					<span
						class="
              hidden
              sm:block
              bg-primary-light
              dark:bg-ternary-dark
              p-2.5
              shadow-sm
              rounded-xl
              cursor-pointer
            "
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="
              pl-3
              pr-1
              sm:px-4
              py-2
              border-1 border-gray-200
              dark:border-secondary-dark
              rounded-lg
              text-sm
              sm:text-md
              bg-secondary-light
              dark:bg-ternary-dark
              text-primary-dark
              dark:text-ternary-light
            "
						id="name"
						name="name"
						type="search"
						required=""
						placeholder="Search Projects"
						aria-label="Name"
					/>
				</div>
				<ProjectsFilter @change="selectedProject = $event" />
			</div>
		</div>
		<!-- Filter and search projects end -->

		<!-- Projects grid start -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
		<!-- Projects grid end -->
	</section>
	<!-- Projects end -->
</template>

<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data: () => {
		return {
			projectsHeading: 'Projects Portfolio',
			projectsDescription:
				'Some of the projects I have successfully completed',
			selectedProject: '',
			searchProject: '',
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
					category: 'UI/UX Design',
					img: require('@/assets/images/ui-project-1.jpg'),
				},
				{
					id: 4,
					title: 'Cloud Storage Platform',
					category: 'UI/UX Design',
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
	computed: {
		filteredProjects() {
			if (this.selectedProject) {
				return this.filterProjectsByCategory();
			} else if (this.searchProject) {
				return this.filterProjectsBySearch();
			}
			return this.projects;
		},
	},
	methods: {
		filterProjectsByCategory() {
			return this.projects.filter((item) => {
				let category =
					item.category.charAt(0).toUpperCase() +
					item.category.slice(1);
				return category.includes(this.selectedProject);
			});
		},
		filterProjectsBySearch() {
			let project = new RegExp(this.searchProject, 'i');
			return this.projects.filter((el) => el.title.match(project));
		},
	},
	mounted() {
		feather.replace();
	},
};
</script>

<style scoped></style>
