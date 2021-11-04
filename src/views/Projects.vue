<template>
	<div class="container mx-auto">
		<!-- Projects start -->
		<Projects />
		<!-- Projects end -->
	</div>
</template>

<script>
import feather from 'feather-icons';
import Projects from '../components/Projects.vue';

export default {
	name: 'Projects',
	components: {
		Projects,
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
