<template>
	<!-- Contact details -->
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2
				class="text-2xl text-primary-dark dark:text-primary-light font-semibold mt-12 mb-8"
			>
				Contact details
			</h2>
			<ul class="">
				<li class="flex" v-for="contact in contacts" :key="contact.id">
					<i
						:data-feather="contact.icon"
						class="w-5 text-gray-500 dark:text-gray-400 mr-4"
					></i>
					<a
						href="#"
						class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
						:class="
							contact.icon === 'mail' || contact.icon === 'phone'
								? 'hover:underline cursor-pointer'
								: ''
						"
						aria-label="Website and Phone"
					>
						{{ contact.name }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['contacts'],
};
</script>

<style lang="scss" scoped></style>
