<template>
	<nav id="nav" class="container mx-auto bg-white">
		<div class="md:flex items-center justify-between px-4 py-5">
			<div class="flex justify-between items-center">
				<div class="text-2xl font-bold text-gray-800 md:text-3xl">
					<router-link to="/">Logo</router-link>
				</div>
				<div class="md:hidden">
					<button
						type="button"
						class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
					>
						<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
							<path
								class="hidden"
								d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
							/>
							<path
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							/>
						</svg>
					</button>
				</div>
				<div class="sm:ml-4 mt-3">
					<router-link
						to="/projects"
						class="text-lg font-medium text-gray-400 uppercase  md:mx-6 mb-2 sm:py-2"
						>Projects</router-link
					>
					<router-link
						to="/about"
						class="text-lg font-medium text-gray-400 uppercase  md:mx-2 mb-2 sm:py-2"
						>About Me</router-link
					>
				</div>
			</div>
			<div class="flex justify-between items-center flex-col md:flex-row">
				<div>
					<button
						class="text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-lg px-5 py-2.5 uppercase"
					>
						Hire Me
					</button>
				</div>
				<div
					class=" sm:ml-7 bg-gray-50 p-2 rounded-lg shadow-sm cursor-pointer"
				>
					<a href="#"
						><i
							data-feather="moon"
							class="text-gray-500 hover:text-gray-400"
						></i
					></a>
				</div>
			</div>
		</div>
	</nav>
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

<style scoped>
#nav a.router-link-exact-active {
	@apply text-gray-700;
}
</style>
