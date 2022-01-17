<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }}.
			<a
				href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
				target="__blank"
				class="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
			>
				Vue.js & TailwindCSS Portfolio
			</a>
			.
			<a
				href="https://stoman.me"
				target="__blank"
				class="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300"
				>Stoman</a
			>
		</div>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			copyrightDate: new Date().getFullYear(),
		};
	},
};
</script>

<style lang="scss" scoped></style>
