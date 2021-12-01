<template>
	<div class="container mx-auto ">
		<div
			class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
		>
			<!-- Footer social links start -->
			<div
				class="flex flex-col justify-center items-center mb-12 sm:mb-28"
			>
				<p
					class="text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
				>
					Follow me
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm∫ p-4"
					>
						<i
							:data-feather="social.icon"
							class="w-5 sm:w-8 h-5 sm:h-8"
						></i>
					</a>
				</ul>
			</div>
			<!-- Footer social links end -->

			<!-- Footer copyright start -->
			<div class="flex justify-center items-center text-center">
				<div class="text-lg text-ternary-dark dark:text-ternary-light ">
					&copy; {{ copyrightDate }}.
					<a
						href="https://github.com/NangialaiStoman/vuejs-tailwindcss-portfolio"
						target="__blank"
						class="hover:underline"
					>
						Vue.js & TailwindCSS Portfolio
					</a>
					.
					<a
						href="https://stoman.me"
						target="__blank"
						class="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline"
						>Stoman</a
					>
				</div>
			</div>
			<!-- Footer copyright end -->
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';
export default {
	data() {
		return {
			copyrightDate: new Date().getFullYear(),
			socials: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/NangialaiStoman',
				},
				{
					id: 2,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/NangialaiStoman',
				},
				{
					id: 2,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/NangialaiStoman',
				},
				{
					id: 4,
					name: 'Medium',
					icon: 'book',
					url: 'https://stoman.medium.com',
				},
				{
					id: 5,
					name: 'Behance',
					icon: 'feather',
					url: 'https://behance.net/NangialaiStoman',
				},
			],
		};
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
