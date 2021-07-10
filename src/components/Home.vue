<template>
	<div class="container mx-auto px-4 py-10">
		<!-- Banner Start -->
		<section class="flex flex-col items-center sm:flex-row justify-between">
			<div class="w-full sm:w-1/3 text-left">
				<h1 class="text-5xl font-semibold text-gray-700 uppercase">
					Hi, Iam Stoman
				</h1>
				<p
					class="mt-4 text-4xl font-semibold leading-none text-gray-400"
				>
					A Full-Stack Developer & Design Enthusiast
				</p>
				<a
					href="#"
					class="flex w-48 mt-10 text-lg border border-indigo-500 py-3 shadow-sm rounded-xl bg-indigo-50 hover:bg-indigo-500 hover:text-white"
				>
					<i data-feather="arrow-down-circle" class="ml-4 mr-3"></i>
					<span>Download CV</span></a
				>
			</div>
			<div class="w-full sm:w-2/3 text-right">
				<img src="@/assets/images/developer.svg" alt="Developer" />
			</div>
		</section>
		<!-- Banner End -->

		<!-- Home Poject Section Start -->
		<section class="pt-48">
			<div class="text-center">
				<p class="text-4xl font-semibold mb-3 text-gray-600">
					Projects Portfolio
				</p>
				<p class="text-lg text-gray-500">
					Some of the projects I have successfully completed
				</p>
			</div>
			<div class="w-full sm:grid sm:grid-cols-3 mt-10 sm:gap-10">
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img src="../assets/images/web-project-2.jpg" alt="" />
					</div>
					<div class="text-center px-4 py-4">
						<p>King Health Platform</p>
						<span>Wen Application</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/mobile-project-2.jpg"
							alt=""
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p>Pheonix Digital Agenncy</p>
						<span>Mobile Application</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img src="../assets/images/ui-project-1.jpg" alt="" />
					</div>
					<div class="text-center px-4 py-4">
						<p>Project Management UI</p>
						<span>UI / Frontend</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img src="../assets/images/ui-project-2.jpg" alt="" />
					</div>
					<div class="text-center px-4 py-4">
						<p>Cloud Storage Platform</p>
						<span>UI / Frontend</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img
							src="../assets/images/mobile-project-1.jpg"
							alt=""
						/>
					</div>
					<div class="text-center px-4 py-4">
						<p>Kabul Social App</p>
						<span>Mobile Application</span>
					</div>
				</a>
				<a
					href="#"
					class="rounded-3xl border hover:border-indigo-200 shadow-sm hover:shadow-lg cursor-pointer mb-6 sm:mb-0"
				>
					<div>
						<img src="../assets/images/web-project-1.jpg" alt="" />
					</div>
					<div class="text-center px-4 py-4">
						<p>Apple Design System</p>
						<span>Web Application</span>
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
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped></style>
