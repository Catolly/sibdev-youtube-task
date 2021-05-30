<template>
	<v-form 
		@submit.prevent="submit" 
		class="d-flex fill-height align-center"
	>
		<v-container fluid>
			<h1 class="text-center">Поиск видео</h1>
			<v-row class="mt-10" justify="center" no-gutters>
				<v-col cols="8">
					<v-row no-gutters>
						<app-search-field-base v-model="query" @search="submit" />
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import { RESULTS_ROUTE_NAME } from '@/router/constants'

import AppSearchFieldBase from '@/components/AppSearchFieldBase'

export default {
	name: 'AppSearchForm',

	components: {
		AppSearchFieldBase,
	},

	data:() => ({
		query: '',
	}),

	methods: {
		submit() {
			if (!this.query) return

			this.$router.push({ 
				name: RESULTS_ROUTE_NAME,
				query: { search_query: this.query } 
			})
		},
	},
}
</script>