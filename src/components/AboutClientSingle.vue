<template>
	<div>
		<img
			:src="client.img"
			:alt="client.title"
			class="w-64 py-5 px-10 border border-ternary-light dark:border-ternary-dark shadow-sm rounded-xl mb-8 cursor-pointer bg-secondary-light"
		/>
	</div>
</template>

<script>
export default {
	props: ['client'],
};
</script>

<style lang="scss" scoped></style>
