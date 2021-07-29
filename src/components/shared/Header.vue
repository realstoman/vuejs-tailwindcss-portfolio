<template>
	<nav id="nav" class="container mx-auto">
		<div
			class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
		>
			<div class="flex justify-between items-center">
				<div>
					<router-link to="/"
						><img
							v-if="theme === 'light'"
							src="../../assets/images/logo-dark.svg"
							class="w-36"
							alt=""
						/>
						<img
							v-else
							src="../../assets/images/logo-light.svg"
							class="w-36"
							alt=""
						/>
					</router-link>
				</div>

				<theme-switcher
					:theme="theme"
					@themeChanged="updateTheme"
					class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg ml-10"
				/>

				<div class="sm:hidden">
					<button
						@click="isOpen = !isOpen"
						type="buttom"
						class="focus:outline-none"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							class="h-6 w-6 fill-current text-secondary-dark dark:text-ternary-light"
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
			</div>

			<div
				:class="isOpen ? 'block' : 'hidden'"
				class="ml-3 sm:ml-4 mt-5 sm:mt-3 sm:flex justify-center items-center"
			>
				<router-link
					to="/projects"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-6 mb-2 sm:py-2"
					>Projects</router-link
				>
				<router-link
					to="/about"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
					>About Me</router-link
				>
				<router-link
					to="/contact"
					class="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  md:mx-2 mb-2 sm:py-2"
					>Contact</router-link
				>
			</div>
			<div
				class="hidden sm:flex justify-between items-center flex-col md:flex-row"
			>
				<div>
					<button
						class="text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-lg px-5 py-2.5"
						@click="showModal()"
					>
						Hire Me
					</button>
				</div>
				<div
					class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
				>
					<theme-switcher
						:theme="theme"
						@themeChanged="updateTheme"
					/>
				</div>
			</div>
		</div>

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
												aria-label="Subject"
											>
												<option selected disabled
													>Select Project Type</option
												>
												<option value="web"
													>Web Application</option
												>
												<option value="mobile"
													>Mobile Applicaiton</option
												>
												<option value="design"
													>UI/UX Design</option
												>
												<option value="graphic"
													>Branding</option
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
												placeholder="Project description"
											></textarea>
										</div>

										<div class="mt-6">
											<button
												class="px-6 py-2.5 text-white font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 rounded-lg"
												type="submit"
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
										class="px-6 py-2 bg-indigo-400 rounded-lg font-bold text-primary-light"
										@click="showModal()"
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
import ThemeSwitcher from '../ThemeSwitcher';
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
				//stop screen scrolling
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
