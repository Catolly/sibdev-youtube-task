<template>
	<app-search-field-base
		:value="value"
		@input="$emit('input', $event)"
		@search="$emit('search')"
	>
		<app-search-field-save-favourite-dialog :query="value" />
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

	props: {
		value: {
			type: String,
			default: '',
		},
	},
}
</script>
