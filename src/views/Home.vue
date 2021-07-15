<template>
	<!-- Banner Start -->
	<Banner />
	<!-- Banner End -->
</template>

<script>
import Banner from '@/components/home/Banner';
import feather from 'feather-icons';

export default {
	name: 'Home',
	components: {
		Banner,
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
