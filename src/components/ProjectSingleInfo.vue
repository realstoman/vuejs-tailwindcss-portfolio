<template>
	<!-- Project information start -->
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details start -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project client details start -->
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2"
				>
					About Client
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in companyInfos"
						:key="info"
						class="text-ternary-dark dark:text-ternary-light"
					>
						<span>{{ info.title }}: </span>
						<a
							href="#"
							:class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
							aria-label="Project Webiste and Phone"
							>{{ info.details }}</a
						>
					</li>
				</ul>
			</div>
			<!-- Single project client details end -->

			<!-- Single project objectives start -->
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					Objective
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Optio, natus! Quibusdam enim quod in esse, mollitia
					molestias incidunt quas ipsa accusamus veniam, quis odit
					cumque vero voluptate, reiciendis amet non!
				</p>
			</div>
			<!-- Single project objectives end -->

			<!-- Single project technologies start -->
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ technlogies[0].title }}
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					{{ technlogies[0].techs.join(', ') }}
				</p>
			</div>
			<!-- Single project technologies end -->

			<!-- Single project social sharing start -->
			<div>
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					Share This
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i :data-feather="social.icon" class="w-5 h-5"></i
					></a>
				</div>
			</div>
			<!-- Single project social sharing end -->
		</div>
		<!-- Single project left section details end -->

		<!-- Single project right section details start -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p
				class="text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
			>
				Challenge
			</p>
			<p
				v-for="projectDetail in projectDetails"
				:key="projectDetail.id"
				class="mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ projectDetail.details }}
			</p>
		</div>
		<!-- Single project right section details end -->
	</div>
	<!-- Project information end -->
</template>

<script>
import feather from 'feather-icons';

export default {
	data() {
		return {
			companyInfos: [
				{
					id: 1,
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: 2,
					title: 'Services',
					details: 'UI Design & Frontend Development',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: 4,
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			technlogies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			projectDetails: [
				{
					id: 1,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: 2,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 3,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: 4,
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			socialSharings: [
				{
					id: 1,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/NangialaiStoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: 'instagram',
					url: 'https://instagram.com/NangialaiStoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: 'facebook',
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: 'linkedin',
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: 'youtube',
					url: 'https://www.youtube.com/c/StomanStudio',
				},
				{
					id: 5,
					name: 'Dribbble',
					icon: 'dribbble',
					url: 'https://www.dribbble.com/',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	methods: {},
	updated() {
		feather.replace();
	},
};
</script>
