<template>
	<app-search-field-base>
		<app-search-field-save-favourite-dialog />
	</app-search-field-base>
</template>

<script>
import AppSearchFieldBase from '@/components/AppSearchFieldBase'
import AppSearchFieldSaveFavouriteDialog from '@/components/AppSearchFieldSaveFavouriteDialog'

export default {
	name: 'AppSearchFieldSaveFavourite',

	components: {
		AppSearchFieldBase,
		AppSearchFieldSaveFavouriteDialog,
	},
}
</script>
