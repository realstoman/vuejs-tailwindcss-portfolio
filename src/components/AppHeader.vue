<template>
	<nav id="nav" class="sm:container sm:mx-auto">
		<!-- Header start -->
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<!-- Header menu links and small screen humberger menu start -->
			<div class="flex justify-between items-center px-4 sm:px-0">
				<!-- Header logos start -->
				<div>
					<router-link to="/"
						><img
							v-if="theme === 'light'"
							src="@/assets/images/logo-dark.svg"
							class="w-36"
							alt="Dark Logo"
						/>
						<img
							v-else
							src="@/assets/images/logo-light.svg"
							class="w-36"
							alt="Light Logo"
						/>
					</router-link>
				</div>
				<!-- Header logos end -->

				<!-- Theme switcher small screen start -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg ml-10"
				/>
				<!-- Theme switcher small screen end -->

				<!-- Small screen humberger menu start -->
				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="buttom"
						class="focus:outline-none"
						aria-label="Humberger Menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
						>
							<path
								v-if="isOpen"
								fill-rule="evenodd"
								d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								clip-rule="evenodd"
							></path>
							<path
								v-if="!isOpen"
								fill-rule="evenodd"
								d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
							></path>
						</svg>
					</button>
				</div>
				<!-- Small screen humberger menu end -->
			</div>
			<!-- Header menu links and small screen humberger menu end -->

			<!-- Header links start -->
			<div
				:class="isOpen ? 'block' : 'hidden'"
				class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
			>
				<router-link
					to="/projects"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
					aria-label="Projects"
					>Projects</router-link
				>
				<router-link
					to="/about"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
					aria-label="About Me"
					>About Me</router-link
				>
				<router-link
					to="/contact"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
					aria-label="Contact"
					>Contact</router-link
				>
				<div
					class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
				>
					<button
						class="sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
						@click="showModal()"
						aria-label="Hire Me Button"
					>
						Hire Me
					</button>
				</div>
			</div>
			<!-- Header links end -->

			<!-- Header right section buttons start -->
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<!-- Hire me button start -->
				<div>
					<button
						class="text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-lg px-5 py-2.5"
						@click="showModal()"
						aria-label="Hire Me Button"
					>
						Hire Me
					</button>
				</div>
				<!-- Hire me button end -->

				<!-- Theme switcher largr screen start -->
				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				/>
				<!-- Theme switcher largr screen end -->
			</div>
			<!-- Header right section buttons stendart -->
		</div>
		<!-- Header end -->

		<!-- Hire me modal start -->
		<transition name="fade">
			<div v-show="modal" class="fixed inset-0 z-30">
				<!-- background -->
				<div
					v-show="modal"
					@click="showModal()"
					class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
				></div>
				<!--          -->
				<main
					class="flex flex-col items-center justify-center h-full w-full"
				>
					<transition name="fade-up-down">
						<div
							v-show="modal"
							class="modal-wrapper flex items-center z-30"
						>
							<div
								class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-xl relative"
							>
								<div
									class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
								>
									<h5
										class=" text-primary-dark dark:text-primary-light text-2xl"
									>
										What project are you looking for?
									</h5>
									<button
										class="px-4 font-bold text-primary-dark dark:text-primary-light"
										@click="showModal()"
									>
										X
									</button>
								</div>
								<div
									class="modal-body p-5 w-full h-full overflow-y-auto "
								>
									<form class="max-w-xl m-4 text-left">
										<div class="">
											<input
												class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="name"
												name="name"
												type="text"
												required=""
												placeholder="Name"
												aria-label="Name"
											/>
										</div>
										<div class="mt-6">
											<input
												class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="email"
												name="email"
												type="text"
												required=""
												placeholder="Email"
												aria-label="Email"
											/>
										</div>
										<div class="mt-6">
											<select
												class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="subject"
												name="subject"
												type="text"
												required=""
												aria-label="Project Category"
											>
												<option
													v-for="category in categories"
													:key="category.id"
													:value="category.value"
													>{{ category.name }}</option
												>
											</select>
										</div>

										<div class="mt-6">
											<textarea
												class="w-full px-5 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
												id="message"
												name="message"
												cols="14"
												rows="6"
												aria-label="Details"
												placeholder="Project description"
											></textarea>
										</div>

										<div class="mt-6">
											<button
												class="px-6 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-1 focus:ring-indigo-900"
												type="submit"
												aria-label="Submit Request"
											>
												Send Request
											</button>
										</div>
									</form>
								</div>
								<div
									class="modal-footer py-3 px-5 border0-t text-right"
								>
									<button
										class="px-6 py-2 bg-indigo-400 hover:bg-indigo-500 rounded-lg font-bold text-primary-light focus:ring-1 focus:ring-indigo-900"
										@click="showModal()"
										aria-label="Close Modal"
									>
										Close
									</button>
								</div>
							</div>
						</div>
					</transition>
				</main>
			</div>
		</transition>
		<!-- Hire me modal end -->
	</nav>
</template>

<script>
import ThemeSwitcher from '@/components/ThemeSwitcher';
import feather from 'feather-icons';

export default {
	components: {
		ThemeSwitcher,
	},
	data() {
		return {
			isOpen: false,
			theme: '',
			modal: false,
			categories: [
				{
					id: 1,
					value: 'web',
					name: 'Web Application',
				},
				{
					id: 2,
					value: 'mobile',
					name: 'Mobile Applicaiton',
				},
				{
					id: 3,
					value: 'ui-ux',
					name: 'UI/UX Design',
				},
				{
					id: 4,
					value: 'branding',
					name: 'Branding',
				},
			],
		};
	},

	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	methods: {
		updateTheme(theme) {
			this.theme = theme;
		},
		showModal() {
			if (this.modal) {
				// Stop screen scrolling
				document
					.getElementsByTagName('html')[0]
					.classList.remove('overflow-y-hidden');
				this.modal = false;
			} else {
				document
					.getElementsByTagName('html')[0]
					.classList.add('overflow-y-hidden');
				this.modal = true;
			}
		},
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped>
#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}

.modal-body {
	max-height: 500px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
