<template>
	<div>
		<div class="container mx-auto">
			<!-- About me start -->
			<AboutMe />
			<!-- About me end -->
		</div>

		<!-- About counter start -->
		<AboutCounter />
		<!-- About counter end -->

		<div class="container mx-auto">
			<!-- About counter start -->
			<AboutClients />
			<!-- About counter end -->
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
