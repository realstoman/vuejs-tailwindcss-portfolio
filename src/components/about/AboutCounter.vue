<template>
	<div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
		<div
			class="container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
		>
			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="12"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>Years of experience</span
				>
			</div>

			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="20"
					:duration="1"
					suffix="k+"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>Stars on GitHub</span
				>
			</div>

			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="92"
					:duration="1"
					suffix="%"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>Positive feedback</span
				>
			</div>

			<div class="mb-20 sm:mb-0">
				<counter
					ref="counter"
					:startAmount="0"
					:endAmount="77"
					:duration="1"
					:autoinit="true"
					@finished="alert(`Counting finished!`)"
					class="text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
				/>
				<span
					class="block text-md text-ternary-dark dark:text-ternary-light"
					>Projects completed</span
				>
			</div>
		</div>
	</div>
</template>

<script>
import counter from 'vue3-autocounter';
export default {
	components: {
		counter,
	},
	setup() {},
};
</script>
