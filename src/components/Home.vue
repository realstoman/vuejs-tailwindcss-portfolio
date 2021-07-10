<template>
	<div class="container mx-auto px-4 py-10">
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
						class="flex justify-center items-center w-36 sm:w-48 mt-10 mb-6 sm:mb-0 text-lg border border-indigo-500 py-2.5 sm:py-3 shadow-sm rounded-xl bg-indigo-50 hover:bg-indigo-500 hover:text-white"
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

		<!-- Home Poject Section Start -->
		<section class="pt-12 sm:pt-40">
			<div class="text-center">
				<p
					class="text-2xl sm:text-4xl font-semibold mb-3 text-gray-600"
				>
					Projects Portfolio
				</p>
				<p class="text-md sm:text-lg text-gray-500">
					Some of the projects I have successfully completed
				</p>
			</div>

			<div class="sm:grid sm:grid-cols-3 mt-10 sm:gap-10">
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/web-project-2.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							King Health Platform
						</p>
						<span class="text-lg text-gray-500"
							>Wen Application</span
						>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/mobile-project-2.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							Pheonix Digital Agenncy
						</p>
						<span class="text-lg text-gray-500"
							>Mobile Application</span
						>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/ui-project-1.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							Project Management UI
						</p>
						<span class="text-lg text-gray-500">UI / Frontend</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/ui-project-2.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							Cloud Storage Platform
						</p>
						<span class="text-lg text-gray-500">UI / Frontend</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/mobile-project-1.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							Kabul Social App
						</p>
						<span class="text-lg text-gray-500"
							>Mobile Application</span
						>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/web-project-1.jpg"
							alt=""
							class="rounded-t-3xl border-none"
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p class="text-2xl text-gray-600 font-semibold mb-3">
							Apple Design System
						</p>
						<span class="text-lg text-gray-500"
							>Web Application</span
						>
					</div>
				</a>
			</div>
		</section>
		<!-- Home Poject Section End -->

		<!--  -->
	</div>
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
