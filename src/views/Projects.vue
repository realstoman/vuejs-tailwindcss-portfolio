<template>
	<div class="container mx-auto">
		<!-- Projects start -->
		<ProjectsGrid />
		<!-- ProjectsGrid end -->
	</div>
</template>

<script>
import ProjectsGrid from '../components/ProjectsGrid.vue';

export default {
	name: 'Projects',
	components: {
		ProjectsGrid,
	},
};
</script>

<style scoped></style>
