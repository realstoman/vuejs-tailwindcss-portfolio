<template>
	<!-- Related projects start -->
	<div
		class="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
	>
		<p
			class="text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"
		>
			{{ relatedProjectsHeading }}
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-4 gap-10">
			<div
				v-for="relatedProject in relatedProjects"
				:key="relatedProject"
			>
				<img
					:src="relatedProject.img"
					class="rounded-2xl cursor-pointer"
					:alt="relatedProject.title"
				/>
			</div>
		</div>
	</div>
	<!-- Related projects end -->
</template>

<script>
export default {
	data: () => {
		return {
			relatedProjectsHeading: 'Related Projects',
			relatedProjects: [
				{
					id: 1,
					title: 'Mobile UI',
					img: require('@/assets/images/mobile-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Web Application',
					img: require('@/assets/images/web-project-1.jpg'),
				},
				{
					id: 3,
					title: 'UI Design',
					img: require('@/assets/images/ui-project-2.jpg'),
				},
				{
					id: 4,
					title: 'Kabul Mobile App UI',
					img: require('@/assets/images/mobile-project-2.jpg'),
				},
			],
		};
	},
};
</script>
