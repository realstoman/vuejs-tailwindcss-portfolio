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
					{{ projectInfo.clientHeading }}
				</p>
				<ul class="leading-loose">
					<li
						v-for="info in projectInfo.companyInfos"
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
							aria-label="Project Website and Phone"
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
					{{ projectInfo.objectivesHeading }}
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					{{ projectInfo.objectivesDetails }}
				</p>
			</div>
			<!-- Single project objectives end -->

			<!-- Single project technologies start -->
			<div class="mb-7">
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.technologies[0].title }}
				</p>
				<p class="text-primary-dark dark:text-ternary-light">
					{{ projectInfo.technologies[0].techs.join(', ') }}
				</p>
			</div>
			<!-- Single project technologies end -->

			<!-- Single project social sharing start -->
			<div>
				<p
					class="text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2"
				>
					{{ projectInfo.socialSharingsHeading }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm"
						><i
							:data-feather="social.icon"
							class="w-4 lg:w-5 h-4 lg:h-5"
						></i
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
				{{ projectInfo.projectDetailsHeading }}
			</p>
			<p
				v-for="projectDetail in projectInfo.projectDetails"
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
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>
