<template>
	<div class="container mx-auto px-4"></div>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Single Project',
	props: {
		msg: String,
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped></style>
