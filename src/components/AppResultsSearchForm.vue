<template>
	<v-form class="mt-10 d-flex">
		<v-container fluid>
			<h1>Поиск видео</h1>
			<v-row class="mt-3" no-gutters>
				<v-col>
					<v-row no-gutters>
						<app-search-field-save-favourite />
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import AppSearchFieldSaveFavourite from '@/components/AppSearchFieldSaveFavourite'

export default {
	name: 'AppResultsSearchForm',

	components: {
		AppSearchFieldSaveFavourite,
	},
}
</script>