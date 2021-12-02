<template>
	<div>
		<!-- About me -->
		<div class="container mx-auto">
			<AboutMe />
		</div>

		<!-- About counter -->
		<AboutCounter />

		<!-- About counter -->
		<div class="container mx-auto">
			<AboutClients />
		</div>
	</div>
</template>

<script>
import AboutMe from '@/components/AboutMe';
import AboutCounter from '@/components/AboutCounter';
import AboutClients from '@/components/AboutClients';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		AboutClients,
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
