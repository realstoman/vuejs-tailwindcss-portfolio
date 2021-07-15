<template>
	<div class="container mx-auto px-4">
		<p>Contact Page</p>
	</div>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Contact',
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
