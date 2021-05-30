<template>
	<div>
		<app-results-search-form />
		<app-results-topbar :viewMode.sync="viewMode" />
		<app-results-list v-show="viewMode === 'list'" class="mt-5" />
		<app-results-grid v-show="viewMode === 'grid'" class="mt-5" />
	</div>
</template>

<script>
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
		viewMode: 'list',
	}),
}
</script>