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
	</div>
</template>

<script>
import AboutMe from '@/components/about/AboutMe';
import AboutCounter from '@/components/about/AboutCounter';
import feather from 'feather-icons';

export default {
	name: 'About',
	components: {
		AboutMe,
		AboutCounter,
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
