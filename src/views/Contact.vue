<template>
	<div class="container mx-auto sm:flex py-5 sm:py-10 mt-10 sm:mt-20">
		<div class="w-full sm:w-1/2">
			<div class="leading-loose">
				<form
					class="max-w-xl m-4 p-6 sm:p-10 bg-white rounded-xl shadow-xl text-left"
				>
					<p class="text-gray-600 text-2xl font-semibold mb-8">
						Contact Form
					</p>
					<div class="">
						<label
							class="block text-lg text-gray-00 mb-2"
							for="name"
							>Full Name</label
						>
						<input
							class="w-full px-5 py-2 text-gray-700 bg-gray-100 rounded"
							id="name"
							name="name"
							type="text"
							required=""
							placeholder="Your Name"
							aria-label="Name"
						/>
					</div>
					<div class="mt-6">
						<label
							class="block text-lg text-gray-00 mb-2"
							for="email"
							>Email</label
						>
						<input
							class="w-full px-5  py-2 text-gray-700 bg-gray-100 rounded"
							id="email"
							name="email"
							type="text"
							required=""
							placeholder="Your Email"
							aria-label="Email"
						/>
					</div>
					<div class="mt-6">
						<label
							class="block text-lg text-gray-00 mb-2"
							for="subject"
							>Subject</label
						>
						<input
							class="w-full px-5 py-2 text-gray-700 bg-gray-100 rounded"
							id="subject"
							name="subject"
							type="text"
							required=""
							placeholder="Subject"
							aria-label="Subject"
						/>
					</div>

					<div class="mt-6">
						<label
							class="block text-lg text-gray-00 mb-2"
							for="message"
							>Message</label
						>
						<textarea
							class="w-full px-2 py-2 text-gray-700 bg-gray-100 rounded"
							id="message"
							name="message"
							cols="14"
							rows="6"
						></textarea>
					</div>

					<div class="mt-6">
						<button
							class="px-4 py-3 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded-lg"
							type="submit"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
		<div class="w-full sm:w-1/2">
			<div class="text-left max-w-xl px-6">
				<h2 class="text-2xl font-semibold mt-12 mb-8">
					Contact details
				</h2>
				<ul class="">
					<li class="flex">
						<i
							data-feather="map-pin"
							class="w-5 text-gray-500 mr-4"
						></i>
						<p class="text-lg mb-4">
							Wazir Akbar Khan, Kabul, Afghanistan
						</p>
					</li>
					<li class="flex">
						<i
							data-feather="mail"
							class="w-5 text-gray-500 mr-4"
						></i>
						<p class="text-lg mb-4">email@example.com</p>
					</li>
					<li class="flex">
						<i
							data-feather="phone"
							class="w-5 text-gray-500 mr-4"
						></i>
						<p class="text-lg mb-4">+93 7888 888 88</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';

export default {
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
