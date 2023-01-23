<script>
export default {
	props: {
		label: {
			type: String,
			default: '',
		},
		textareaIdentifier: {
			type: String,
			default: '',
		},
		val: {
			type: [String, Number],
			default: '',
		},
	},
};
</script>

<template>
	<div>
		<label
			class="block text-lg text-primary-dark dark:text-primary-light mb-2"
			:for="textareaIdentifier"
			>{{ label }}</label
		>
		<textarea
			class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
			:id="textareaIdentifier"
			:name="textareaIdentifier"
			:aria-label="textareaIdentifier"
			:placeholder="label"
			v-bind="$attrs"
			@input="$emit('update:val', $event.target.value)"
			cols="14"
			rows="6"
		></textarea>
	</div>
</template>

<style lang="scss" scoped></style>
