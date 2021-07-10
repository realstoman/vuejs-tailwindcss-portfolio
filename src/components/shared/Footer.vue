<template>
	<div class="container mx-auto bg-white px-4 pt-64 pb-12">
		<div class="flex flex-col justify-center items-center mb-32">
			<p class="text-5xl font-semibold text-gray-500 mb-5">Follow me</p>
			<ul class="flex gap-10">
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4"
				>
					<i data-feather="github" class="w-10 h-10"></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4"
				>
					<i data-feather="twitter" class="w-10 h-10"></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4"
				>
					<i data-feather="instagram" class="w-10 h-10"></i>
				</li>
				<li
					class="text-gray-400 hover:text-indigo-500 cursor-pointer rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm p-4"
				>
					<i data-feather="dribbble" class="w-10 h-10"></i>
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
