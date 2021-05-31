<template>
	<div class="mt-10">
		<h1>Избранное</h1>

		<h3 
			v-if="!favourites.length"
			class="mt-4"
		>
			Нет избранных
		</h3>

		<app-favourites-list 
			:favourites="favourites"
			class="mt-10" 
			@edit="openSaveFavouriteForm"
			@delete="deleteFavourite"
		/>
	</div>
</template>

<script>
import FavouritesService from '@/services/FavouritesService'

import AppFavouritesList from '@/components/AppFavouritesList'

export default {
	name: 'Favourites',

	components: {
		AppFavouritesList,
	},

	data:() => ({
		favourites: [],
	}),

	methods: {
		updateFavouriteList() {
			this.favourites = this.getFavouriteList()
		},
		getFavouriteList() {
			return FavouritesService.getFavourites()
		},
		deleteFavourite(favourite) {
			FavouritesService.deleteFavourite(favourite)
			this.updateFavouriteList()
		},
	},

	created() {
		this.updateFavouriteList()
	},
}
</script>
