<template>
	<!-- Banner Start -->
	<section class="flex flex-col items-center sm:flex-row justify-between">
		<div class="w-full sm:w-1/3 text-left">
			<h1
				class="text-3xl sm:text-5xl text-center sm:text-left font-semibold text-gray-700 uppercase"
			>
				Hi, Iam Stoman
			</h1>
			<p
				class="mt-4 text-2xml sm:text-4xl text-center sm:text-left font-semibold leading-none text-gray-400"
			>
				A Full-Stack Developer & Design Enthusiast
			</p>
			<div class="flex justify-center sm:block">
				<a
					href="#"
					class="flex justify-center items-center w-36 sm:w-48 mt-10 mb-6 sm:mb-0 text-lg border border-indigo-200 py-2.5 sm:py-3 shadow-lg rounded-xl bg-indigo-50 hover:bg-indigo-500 hover:text-white"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"
					></i>
					<span class="text-sm sm:text-lg">Download CV</span></a
				>
			</div>
		</div>
		<div class="w-full sm:w-2/3 text-right">
			<img src="@/assets/images/developer.svg" alt="Developer" />
		</div>
	</section>
	<!-- Banner End -->
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
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
