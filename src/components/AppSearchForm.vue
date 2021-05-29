<template>
	<v-form class="d-flex fill-height align-center">
		<v-container fluid>
			<h1 class="text-center">Поиск видео</h1>
			<v-row class="mt-10" justify="center" no-gutters>
				<v-col cols="8">
					<v-row no-gutters>
						<app-search-field-base />
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import AppSearchFieldBase from '@/components/AppSearchFieldBase'

export default {
	name: 'AppSearchForm',

	components: {
		AppSearchFieldBase,
	},
}
</script>