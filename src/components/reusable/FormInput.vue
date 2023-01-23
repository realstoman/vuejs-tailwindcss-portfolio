<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		inputIdentifier: {
			type: String,
			default: '',
		},
		val: {
			type: [String, Number],
			default: '',
		},
		inputType: {
			type: String,
			default: 'text',
		},
	},
};
</script>

<template>
	<div>
		<label
			class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
			:for="label"
			>{{ label }}</label
		>
		<input
			class="w-full px-5 py-3 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
			:id="inputIdentifier"
			:name="inputIdentifier"
			:placeholder="label"
			:aria-label="inputIdentifier"
			:value="val"
			:type="inputType"
			v-bind="$attrs"
			@input="$emit('update:val', $event.target.value)"
			required
		/>
	</div>
</template>

<style lang="scss" scoped></style>
