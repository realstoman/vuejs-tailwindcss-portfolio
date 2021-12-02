<template>
	<div class="container mx-auto sm:flex py-5 sm:py-10 mt-5 sm:mt-10">
		<!-- Contact form -->
		<ContactForm />

		<!-- Contact details -->
		<ContactDetails :contacts="contacts" />
	</div>
</template>

<script>
import feather from 'feather-icons';
import ContactForm from '@/components/ContactForm.vue';
import ContactDetails from '@/components/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Your Address, Your City, Your Country',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'email@domain.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '555 8888 888',
					icon: 'phone',
				},
			],
		};
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
