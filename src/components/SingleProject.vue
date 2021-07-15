<template>
	<div class="container mx-auto px-4">
		<!-- Project heading and meta info start -->
		<p class="text-left text-4xl font-bold text-gray-600 mt-20 mb-7">
			Kabul Project Management UI
		</p>
		<div class="flex">
			<div class="flex items-center mr-10">
				<i data-feather="clock" class="w-4 h-4 text-gray-400"></i>
				<span class="ml-2 leading-none text-gray-500"
					>Jul 26, 2021</span
				>
			</div>
			<div class="flex items-center">
				<i data-feather="tag" class="w-4 h-4 text-gray-400"></i>
				<span class="ml-2 leading-none text-gray-500"
					>UI / Frontend</span
				>
			</div>
		</div>
		<!-- Project heading and meta info end -->

		<!-- Project gallery start -->
		<div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-10">
			<div>
				<img
					src="../assets/images/ui-project-1.jpg"
					class="rounded-2xl cursor-pointer"
					alt="Kabul Project Management UI"
				/>
			</div>
			<div>
				<img
					src="../assets/images/ui-project-1.jpg"
					class="rounded-2xl cursor-pointer"
					alt="Kabul Project Management UI"
				/>
			</div>
			<div>
				<img
					src="../assets/images/ui-project-1.jpg"
					class="rounded-2xl cursor-pointer"
					alt="Kabul Project Management UI"
				/>
			</div>
		</div>
		<!-- Project gallery end -->

		<!-- Project information start -->
		<div class="flex mt-12">
			<div class="w-1/3 text-left">
				<div class="mb-7">
					<p class="text-2xl font-semibold text-gray-600 mb-2">
						About Client
					</p>
					<ul class="leading-loose">
						<li>
							<span class="text-gray-600">Name: </span> Kabul
							Company Ltd
						</li>
						<li>
							<span class="text-gray-600">Services: </span> UI
							Design & Frontend Development
						</li>
						<li>
							<span class="text-gray-600">Website: </span>
							<a href="#">https://kabul.com</a>
						</li>
						<li>
							<span class="text-gray-600">Phone: </span> +93 7888
							888 88
						</li>
					</ul>
				</div>
				<div class="mb-7">
					<p class="text-2xl font-semibold text-gray-600 mb-2">
						Objective
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Optio, natus! Quibusdam enim quod in esse, mollitia
						molestias incidunt quas ipsa accusamus veniam, quis odit
						cumque vero voluptate, reiciendis amet non!
					</p>
				</div>
				<div class="mb-7">
					<p class="text-2xl font-semibold text-gray-600 mb-2">
						Tools & Technologies
					</p>
					<p>HTML, CSS, JavaScript, Vue.js, TailwindCSS, AdobeXD</p>
				</div>
				<div>
					<p class="text-2xl font-semibold text-gray-600 mb-2">
						Share This
					</p>
					<div class="flex items-center gap-3 mt-5">
						<a href="#"><i data-feather="twitter"></i></a>
						<a href="#"><i data-feather="facebook"></i></a>
						<a href="#"><i data-feather="instagram"></i></a>
						<a href="#"><i data-feather="linkedin"></i></a>
						<a href="#"><i data-feather="youtube"></i></a>
					</div>
				</div>
			</div>
			<div class="w-2/3"></div>
		</div>
		<!-- Project information end -->
	</div>
</template>

<script>
import feather from 'feather-icons';

export default {
	name: 'Single Project',
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
