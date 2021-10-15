<template>
	<!-- Project gallery start -->
	<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
		<div
			class="mb-10 sm:mb-0"
			v-for="projectImage in projectImages"
			:key="projectImage.id"
		>
			<img
				:src="projectImage.img"
				class="rounded-2xl cursor-pointer shadow-lg sm:shadow-none"
				alt="{{ projectImage.title }}"
			/>
		</div>
	</div>
	<!-- Project gallery end -->
</template>

<script>
export default {
	data() {
		return {
			projectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: require('../../assets/images/ui-project-1.jpg'),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: require('../../assets/images/web-project-2.jpg'),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: require('../../assets/images/mobile-project-2.jpg'),
				},
			],
		};
	},
};
</script>
