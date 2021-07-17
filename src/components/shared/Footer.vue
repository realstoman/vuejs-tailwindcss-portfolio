<template>
	<div class="container mx-auto pt-20 sm:pt-40 pb-8">
		<div class="flex flex-col justify-center items-center mb-12 sm:mb-28">
			<p class="text-3xl sm:text-4xl font-semibold text-gray-500 mb-5">
				Follow me
			</p>
			<ul class="flex gap-4 sm:gap-8">
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm∫ p-4"
				>
					<i data-feather="github" class="w-6 sm:w-8 h-6 sm:h-8"></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm∫ p-4"
				>
					<i data-feather="twitter" class="w-6 sm:w-8 h-6 sm:h-8"></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm∫ p-4"
				>
					<i
						data-feather="instagram"
						class="w-6 sm:w-8 h-6 sm:h-8"
					></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm∫ p-4"
				>
					<i
						data-feather="dribbble"
						class="w-6 sm:w-8 h-6 sm:h-8"
					></i>
				</li>
			</ul>
		</div>
		<div class="flex justify-center items-center text-center">
			<div class="text-lg text-gray-500">
				&copy; Copyright 2021.
				<a
					href="https://stoman.me"
					target="__blank"
					class="text-gray-600 font-medium"
					>Stoman</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';
export default {
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped></style>
