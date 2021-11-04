<template>
	<div class="mt-10 sm:mt-20">
		<p
			class="text-2xl sm:text-4xl text-primary-dark dark:text-primary-light font-sans font-semibold"
		>
			{{ clientsHeading }}
		</p>
		<div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
			<AboutClientSingle
				v-for="client in clients"
				:key="client.id"
				:client="client"
			/>
		</div>
	</div>
</template>

<script>
import AboutClientSingle from './AboutClientSingle.vue';

export default {
	components: {
		AboutClientSingle,
	},
	data: () => {
		return {
			clientsHeading: 'Some of the brands I worked with',
			clients: [
				{
					id: 1,
					title: 'Amazon',
					img: require('@/assets/images/brands/amazon_gray.png'),
				},
				{
					id: 2,
					title: 'Sony',
					img: require('@/assets/images/brands/sony_gray.png'),
				},
				{
					id: 3,
					title: 'Adidas',
					img: require('@/assets/images/brands/adidas_gray.png'),
				},
				{
					id: 4,
					title: 'FILA',
					img: require('@/assets/images/brands/fila_gray.png'),
				},
				{
					id: 5,
					title: 'NB',
					img: require('@/assets/images/brands/nb_gray.png'),
				},
				{
					id: 6,
					title: 'SAMSUNG',
					img: require('@/assets/images/brands/samsung_gray.png'),
				},
				{
					id: 7,
					title: 'CANON',
					img: require('@/assets/images/brands/canon_gray.png'),
				},
				{
					id: 7,
					title: 'PUMA',
					img: require('@/assets/images/brands/puma_gray.png'),
				},
			],
		};
	},
};
</script>
