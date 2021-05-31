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

		<v-dialog
			v-model="isOpenSaveFavouriteForm"
			max-width="510px"
		>	
			<app-save-favourite-form 
				:request="editingFavourite"
				@close="closeSaveFavouriteForm"
				@submit="submit"
			/>			
		</v-dialog>
	</div>
</template>

<script>
import FavouritesService from '@/services/FavouritesService'

import AppFavouritesList from '@/components/AppFavouritesList'
import AppSaveFavouriteForm from '@/components/AppSaveFavouriteForm'

export default {
	name: 'Favourites',

	components: {
		AppFavouritesList,
		AppSaveFavouriteForm,
	},

	data:() => ({
		isOpenSaveFavouriteForm: false, 
		editingFavourite: null,
		favourites: [],
	}),

	methods: {
		updateFavouriteList() {
			this.favourites = this.getFavouriteList()
		},
		getFavouriteList() {
			return FavouritesService.getFavourites()
		},
		submit() {
			this.updateFavouriteList()
			this.closeSaveFavouriteForm()
		},
		closeSaveFavouriteForm() {
			this.isOpenSaveFavouriteForm = false
		},
		openSaveFavouriteForm(favourite) {
			this.editingFavourite = favourite
			this.isOpenSaveFavouriteForm = true
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
