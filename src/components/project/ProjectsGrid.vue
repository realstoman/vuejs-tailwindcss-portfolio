<template>
	<!-- Projects start -->
	<section class="pt-20 sm:pt-28">
		<div class="text-center">
			<p
				class="text-2xl sm:text-5xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light"
			>
				Projects Portfolio
			</p>
			<p class="text-md sm:text-xl text-gray-500 dark:text-ternary-light">
				Some of the projects I have successfully completed
			</p>
		</div>

		<div class="grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/web-project-2.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Google Health Platform
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>Wen Application</span
					>
				</div>
			</router-link>
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/mobile-project-2.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Pheonix Digital Agenncy
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>Mobile Application</span
					>
				</div>
			</router-link>
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/ui-project-1.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Project Management UI
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>UI / Frontend</span
					>
				</div>
			</router-link>
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/ui-project-2.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Cloud Storage Platform
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>UI / Frontend</span
					>
				</div>
			</router-link>
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/mobile-project-1.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Kabul Social App
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>Mobile Application</span
					>
				</div>
			</router-link>
			<router-link
				to="/projects/single-project"
				class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
			>
				<div>
					<img
						src="../../assets/images/web-project-1.jpg"
						alt=""
						class="rounded-t-3xl border-none"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						Apple Design System
					</p>
					<span
						class="text-lg text-ternary-dark dark:text-ternary-light"
						>Web Application</span
					>
				</div>
			</router-link>
		</div>
		<div class="mt-10 sm:mt-20 flex justify-center">
			<button
				class="flex items-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white text-lg sm:text-xl font-medium"
			>
				<i data-feather="refresh-cw" class="w-5 mr-3"></i>
				<span>Load More</span>
			</button>
		</div>
	</section>
	<!-- Projects end -->
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Projects',
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
