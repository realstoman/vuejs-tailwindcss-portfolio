<template>
	<div class="container mx-auto">
		<!-- Projects start -->
		<ProjectsGrid />
		<!-- Projects end -->
	</div>
</template>

<script>
import ProjectsGrid from '@/components/project/ProjectsGrid';
import feather from 'feather-icons';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
	props: {
		msg: String,
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
