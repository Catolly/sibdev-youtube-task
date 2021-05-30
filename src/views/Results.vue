<template>
	<div>
		<app-results-search-form />
		<app-results-topbar :viewMode.sync="viewMode" />
				<app-results-list 
					v-show="viewMode === VIEW_MODE_LIST"
					class="mt-5" 
				/>
				<app-results-grid 
					v-show="viewMode === VIEW_MODE_GRID"
					class="mt-5" 
				/>
	</div>
</template>

<script>
import { VIEW_MODE_GRID, VIEW_MODE_LIST } from '@/components/constants'

import AppResultsSearchForm from '@/components/AppResultsSearchForm'
import AppResultsTopbar from '@/components/AppResultsTopbar'
import AppResultsList from '@/components/AppResultsList'
import AppResultsGrid from '@/components/AppResultsGrid'

export default {
	name: 'Search',

	components: {
		AppResultsSearchForm,
		AppResultsTopbar,
		AppResultsList,
		AppResultsGrid,
	},

	data:() => ({
		viewMode: VIEW_MODE_LIST,
	}),

	computed: {
		VIEW_MODE_LIST() {
			return VIEW_MODE_LIST
		},
		VIEW_MODE_GRID() {
			return VIEW_MODE_GRID
		},
	},
}
</script>