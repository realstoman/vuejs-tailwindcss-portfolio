<template>
	<div>
		<div class="container mx-auto px-4 py-10">
			<!-- About me start -->
			<AboutMe />
			<!-- About me end -->
		</div>

		<!-- About counter start -->
		<AboutCounter />
		<!-- About counter end -->

		<div class="container mx-auto px-4 py-10">
			<!-- About counter start -->
			<Clients />
			<!-- About counter end -->
		</div>
	</div>
</template>

<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import Clients from '@/components/about/Clients';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
		Clients,
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
